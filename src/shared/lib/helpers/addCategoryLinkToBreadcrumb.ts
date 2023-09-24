import Category from '../../types/Category';
import { LinkProps } from '../../types';

const addCategoryLinkToBreadcrumb = (
  handleCategoryClick: (category?: Category) => Promise<void> | void,
  category?: Category,
): LinkProps[] => {
  if (category) {
    const breadcrumbLinks: LinkProps[] = [
      { title: category.name, onClick: () => handleCategoryClick(category), to: '/catalog' },
    ];
    if (category?.parent) {
      return breadcrumbLinks.concat(...addCategoryLinkToBreadcrumb(handleCategoryClick, category?.parent));
    }
    return breadcrumbLinks;
  }
  return [];
};

export default addCategoryLinkToBreadcrumb;
