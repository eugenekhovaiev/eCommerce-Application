import { useEffect, useState } from 'react';
import FilterForm from '../../widgets/filter/FilterForm';
import ProductCategories from '../../widgets/productCategories/ProductCategories';
import ProductCard from '../../entities/productCard/ProductCard';
import getProducts from '../../shared/api/user/products/getProducts';
import buildCategoryTree from '../../shared/lib/helpers/buildCategoryTree';
import Category from '../../shared/types/Category';
import { ProductProjection } from '@commercetools/platform-sdk';
import { FilterProvider } from '../../shared/lib/contexts/FilterContext';
import LinkElement from '../../shared/UI/linkElement/LinkElement';

const Catalog = (): JSX.Element => {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [productsArr, setProductsArr] = useState<ProductProjection[] | []>([]);
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState<Category>();

  // TODO вынести в отдельный компонент BreadCrums

  const handleCategoryClick = async (category: Category): Promise<void> => {
    try {
      const newQueryParams = {
        filters: { categoriesIds: category.id },
      };
      const productsObj = await getProducts(newQueryParams);
      setProductsArr(productsObj.body.results);
      setCategoryId(category.id);
      setCategory(category);
      if (setSearch) setSearch('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const mainCategories = await buildCategoryTree();
        const productsObj = await getProducts();
        setIsFilter(true);
        setMainCategories(mainCategories);
        setProductsArr(productsObj.body.results);
      } catch (error) {
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
            setCategory={setCategory}
            setProducts={setProductsArr}
            search={search}
            setSearch={setSearch}
          />
          <div className="container">
            <div className="catalog-products__content">
              {categoryId && (
                <h2 className="catalog-products__title">
                  {category?.parent?.parent?.name && (
                    <span>
                      <LinkElement
                        key={category?.parent?.parent?.name}
                        title={category?.parent?.parent?.name}
                        onClick={(): Promise<void> => handleCategoryClick(category?.parent?.parent as Category)}
                        to="/catalog"
                      />
                      {' / '}
                    </span>
                  )}
                  {category?.parent?.name && (
                    <span>
                      <LinkElement
                        key={category?.parent?.name}
                        title={category?.parent?.name}
                        onClick={(): Promise<void> => handleCategoryClick(category?.parent as Category)}
                        to="/catalog"
                      />
                      {' / '}
                    </span>
                  )}
                  <span>{category?.name}</span>
                </h2>
              )}
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
                {productsArr.length
                  ? productsArr.map((product, index) => {
                      const productImages = product.masterVariant.images;
                      const productPreviewUrl = productImages && productImages[0] && productImages[0].url;

                      const productPrices = product.masterVariant.prices;
                      const productOriginalPrice =
                        productPrices && productPrices[0] && productPrices[0].value.centAmount;
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
                    })
                  : 'No products matching your request.'}
              </div>
            </div>
          </div>
        </section>
      </main>
    </FilterProvider>
  );
};

export default Catalog;
