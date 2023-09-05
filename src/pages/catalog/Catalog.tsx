import { useEffect, useState } from 'react';
import FilterForm from '../../widgets/filter/FilterForm';
import ProductCategories from '../../widgets/productCategories/ProductCategories';
import ProductCard from '../../entities/productCard/ProductCard';
import getProducts from '../../shared/api/user/getProducts';
import buildCategoryTree from '../../shared/lib/helpers/buildCategoryTree';
import Category from '../../shared/types/Category';
import { ProductProjection } from '@commercetools/platform-sdk';
import { FilterProvider } from '../../shared/lib/contexts/FilterContext';

const Catalog = (): JSX.Element => {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [productsArr, setProductsArr] = useState<ProductProjection[] | []>([]);
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const mainCategories = await buildCategoryTree();
        const productsObj = await getProducts();
        setIsFilter(true);
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
            search={search}
            setSearch={setSearch}
          />
          <div className="container catalog-products__content">
            <div className="catalog-products__filter">
              {search !== '' && (
                <div className="catalog-products__search-results-info">
                  <h4 className="title">Search results</h4>
                  <h3 className="subtitle">&quot;{search}&quot;</h3>
                </div>
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
