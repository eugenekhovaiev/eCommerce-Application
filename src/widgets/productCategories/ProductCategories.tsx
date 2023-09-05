import { useState } from 'react';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';
import Category from '../../shared/types/Category';
import { ProductCategoriesProps } from '../../shared/types';
import { useFilterContext } from '../../shared/lib/contexts/FilterContext';

const ProductCategories = (props: ProductCategoriesProps): JSX.Element => {
  const [isSubCategories, setIsSubCategories] = useState(false);
  const [visibleCategory, setVisibleCategory] = useState<Category>();
  const { updateIsCategoryUpdated } = useFilterContext();

  const handleCategoryClick = async (id: string): Promise<void> => {
    try {
      const newQueryParams = {
        searchText: 'Sample Necklace',
        filters: { categoriesIds: id },
      };
      const productsObj = await getProducts(newQueryParams);
      props.setProducts(productsObj.body.results);
      props.setCategoryId(id);
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

  return (
    <div
      className="container catalog-products__categories-wrapper"
      onMouseLeave={(): void => setIsSubCategories(false)}
    >
      <div className="catalog-products__categories">
        {props.mainCategories &&
          props.mainCategories.map((category) => (
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
  );
};

export default ProductCategories;
