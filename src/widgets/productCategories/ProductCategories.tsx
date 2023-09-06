import { useState } from 'react';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';
import Category from '../../shared/types/Category';
import { ProductCategoriesProps } from '../../shared/types';
import { useFilterContext } from '../../shared/lib/contexts/FilterContext';
import SearchInput from '../../entities/inputs/SearchInput';

const ProductCategories = (props: ProductCategoriesProps): JSX.Element => {
  const [isSubCategories, setIsSubCategories] = useState(false);
  const [visibleCategory, setVisibleCategory] = useState<Category>();
  const { updateIsCategoryUpdated } = useFilterContext();

  const handleCategoryClick = async (category: Category): Promise<void> => {
    try {
      const newQueryParams = {
        filters: { categoriesIds: category.id },
      };
      const productsObj = await getProducts(newQueryParams);
      props.setProducts(productsObj.body.results);
      props.setCategoryId(category.id);
      props.setCategory(category);
      if (props.setSearch) props.setSearch('');
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
              onClick={(): Promise<void> => handleCategoryClick(category)}
              onMouseEnter={(): void => handleMouseEnter(category)}
              onMouseLeave={(): void => handleMouseLeave(category)}
              to="/catalog"
            />
          ))}
      </div>
      <SearchInput
        search={props.search}
        setSearch={props.setSearch}
        additionalClassName="catalog-products__search"
        setCategoryId={props.setCategoryId}
        setProducts={props.setProducts}
      />
      {isSubCategories && (
        <div className="catalog-products__subcategories">
          {visibleCategory
            ? visibleCategory?.children?.map((subcategory) => (
                <div key={subcategory.name} className="catalog-products__subcategory-wrapper">
                  <LinkElement
                    additionalClassName=" catalog-products__subcategory catalog-products__subcategory_bold"
                    title={subcategory.name}
                    onClick={(): Promise<void> => handleCategoryClick(subcategory)}
                    to="/catalog"
                  />
                  {subcategory.children?.map((child) => (
                    <LinkElement
                      additionalClassName="catalog-products__subcategory"
                      key={child.name}
                      title={child.name}
                      onClick={(): Promise<void> => handleCategoryClick(child)}
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
