import { useEffect, useState } from 'react';
import FilterForm from '../../widgets/filter/FilterForm';
import ProductCategories from '../../widgets/productCategories/ProductCategories';
import ProductCard from '../../entities/productCard/ProductCard';
import SearchInput from '../../entities/inputs/SearchInput';
// import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';
import buildCategoryTree from '../../shared/lib/helpers/buildCategoryTree';
import Category from '../../shared/types/Category';
import { ProductProjection } from '@commercetools/platform-sdk';
import { FilterProvider } from '../../shared/lib/contexts/FilterContext';

const Catalog = (): JSX.Element => {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [productsArr, setProductsArr] = useState<ProductProjection[] | []>([]);
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const mainCategories = await buildCategoryTree();
        const productsObj = await getProducts();
        setIsFilter(true);
        setIsSearch(true);
        setMainCategories(mainCategories);
        setProductsArr(productsObj.body.results);
      } catch (error) {
        // navigate(from, { replace: true });
        console.log('Something went wrong!');
      }
    };

    fetchData();
  }, []);

  if (!productsArr || !mainCategories) {
    return <div>Loading...</div>;
  }

  return (
    <FilterProvider>
      <main className="catalog">
        <section className="catalog-products">
          <ProductCategories
            mainCategories={mainCategories}
            setCategoryId={setCategoryId}
            setProducts={setProductsArr}
          />
          <div className="container catalog-products__content">
            <div className="catalog-products__filter">
              {isSearch && (
                <SearchInput
                  search={search}
                  setSearch={setSearch}
                  additionalClassName="catalog-products__search"
                  setCategoryId={setCategoryId}
                  setProducts={setProductsArr}
                />
              )}
              {isFilter && <FilterForm search={search} setProducts={setProductsArr} categoriesIds={categoryId} />}
            </div>
            <div className="catalog-products__products">
              {productsArr.map((product, index) => {
                const productImages = product.masterVariant.images;
                const productPreviewUrl = productImages && productImages[0] && productImages[0].url;

                const productPrices = product.masterVariant.prices;
                const productOriginalPrice = productPrices && productPrices[0] && productPrices[0].value.centAmount;
                const productDiscountedPrice =
                  productPrices && productPrices[0] && productPrices[0].discounted?.value.centAmount;

                return (
                  <ProductCard
                    url={product.id}
                    image={productPreviewUrl}
                    name={product.name}
                    priceOriginal={productOriginalPrice}
                    priceDiscounted={productDiscountedPrice}
                    description={product.description}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </FilterProvider>
  );
};

export default Catalog;
