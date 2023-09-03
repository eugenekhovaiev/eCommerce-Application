import { useState } from 'react';
import FilterForm from '../../widgets/filter/FilterForm';
import ProductCard from '../../entities/productCard/ProductCard';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';
import buildCategoryTree from '../../shared/lib/helpers/buildCategoryTree';
import Category from '../../shared/types/Category';
import { ProductProjection } from '@commercetools/platform-sdk';
import { useFilterContext } from '../../shared/lib/contexts/FilterContext';

const Catalog = (): JSX.Element => {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const [visibleCategory, setVisibleCategory] = useState<Category>();
  const [isSubCategories, setIsSubCategories] = useState(false);
  const [productsArr, setProductsArr] = useState<ProductProjection[] | []>([]);
  const [categoryId, setCategoryId] = useState('');
  const { updateIsCategoryUpdated } = useFilterContext();

  const handleShowPageClick = async (): Promise<void> => {
    try {
      const mainCategories = await buildCategoryTree();
      const productsObj = await getProducts();
      console.log(mainCategories);
      console.log(productsObj.body.results);
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
      setProductsArr(productsObj.body.results);
      setCategoryId(id);
      updateIsCategoryUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleMouseEnter = (category: Category): void => {
    setIsSubCategories(true);
    setVisibleCategory(category);
  };
  const handleMouseLeave = (category: Category): void => {
    setVisibleCategory(category);
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
      <section className="start-screen">
        <div className="container start-screen__wrapper">
          <LinkElement title="Show page" onClick={handleShowPageClick} to="/catalog" />
        </div>
      </section>
      <section className="catalog-products">
        <div
          className="container catalog-products__categories-wrapper"
          onMouseLeave={(): void => setIsSubCategories(false)}
        >
          <div className="catalog-products__categories">
            {mainCategories.map((category) => (
              <LinkElement
                additionalClassName="catalog-products__category"
                key={category.name}
                title={category.name}
                onClick={(): Promise<void> => handleCategoryClick(category.id)}
                onMouseEnter={(): void => handleMouseEnter(category)}
                onMouseLeave={(): void => handleMouseLeave(category)}
                to="/catalog"
              />
            ))}
          </div>
          {isSubCategories && (
            <div className="catalog-products__subcategories">
              {visibleCategory
                ? visibleCategory?.children?.map((subcategory) => (
                    <div key={subcategory.name} className="catalog-products__subcategory-wrapper">
                      <LinkElement
                        additionalClassName=" catalog-products__subcategory catalog-products__subcategory_bold"
                        title={subcategory.name}
                        onClick={(): Promise<void> => handleCategoryClick(subcategory.id)}
                        to="/catalog"
                      />
                      {subcategory.children?.map((child) => (
                        <LinkElement
                          additionalClassName="catalog-products__subcategory"
                          key={child.name}
                          title={child.name}
                          onClick={(): Promise<void> => handleCategoryClick(child.id)}
                          to="/catalog"
                        />
                      ))}
                    </div>
                  ))
                : ''}
            </div>
          )}
        </div>
        <div className="container catalog-products__content">
          <div className="catalog-products__filter">
            {isFilter && (
              <FilterForm
                setProducts={setProductsArr}
                categoriesIds={categoryId}
                // isCategoryUpdates={isCategoryUpdated}
              />
            )}
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
                  url={product.slug['en-US']}
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
  );
};

export default Catalog;
