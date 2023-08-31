import { useState } from 'react';
import FilterForm from '../../widgets/filter/FilterForm';
import ProductCard from '../../entities/productCard/ProductCard';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';
import buildCategoryTree from '../../shared/lib/helpers/buildCategoryTree';
import Category from '../../shared/types/Category';
import { ProductProjection } from '@commercetools/platform-sdk';

const Catalog = (): JSX.Element => {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const [productsArr, setProductsArr] = useState<ProductProjection[] | []>([]);

  const handleShowPageClick = async (): Promise<void> => {
    try {
      const mainCategories = await buildCategoryTree();
      const productsObj = await getProducts();
      console.log(mainCategories);
      setIsFilter(true);
      setMainCategories(mainCategories);
      setProductsArr(productsObj.body.results);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCategoryClick = async (id: string): Promise<void> => {
    try {
      const productsObj = await getProducts({
        filters: { categoriesIds: id },
      });
      console.log(productsObj);
      setProductsArr(productsObj.body.results);
      console.log(productsArr);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleClick = async (): Promise<void> => {
  //   try {
  //     const productsObj = await getProducts({
  //       // sort: { by: 'name.en-US', order: 'asc' },
  //       // filters: { categoriesIds: '1ce34364-a540-4fc4-a3dd-13c2ba382c79' },
  //       // filters: { attributes: [{ enumName: 'color', value: 'Pink' }] },
  //       // filters: { attributes: [{ enumName: 'size', value: 'Medium' }] },
  //       // filters: { searchKeywords: 'skinny' },
  //     });

  //     console.log(productsObj);
  //     setProductsArr(productsObj.body.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main className="catalog">
      {/* <section className="start-screen">
        <div className="container start-screen__wrapper">
          <h2 className="start-screen__title">Catalog page</h2>
        </div>
      </section> */}
      <section className="catalog-products">
        <div className="container catalog-products__wrapper">
          <LinkElement title="Show page" onClick={handleShowPageClick} to="/catalog" />
          <div className="catalog-products__content">
            <div className="catalog-products__categories">
              {mainCategories.map((category) => (
                <LinkElement
                  key={category.name}
                  title={category.name}
                  onClick={(): Promise<void> => handleCategoryClick(category.id)}
                  to="/catalog"
                />
              ))}
            </div>
            <div className="catalog-products__filter">{isFilter && <FilterForm />}</div>
            <div className="catalog-products__products">
              {productsArr.map((product, index) => {
                const productImages = product.masterVariant.images;
                const productPreviewUrl =
                  productImages && productImages[0] ? productImages[0].url : 'src/shared/assets/image-placeholder.svg';

                const productPrices = product.masterVariant.prices;
                const productPrice =
                  productPrices && productPrices[0] ? productPrices[0].value.centAmount : 'Price is missing';
                return (
                  <ProductCard
                    image={productPreviewUrl}
                    name={product.name}
                    price={productPrice}
                    description={product.description}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
