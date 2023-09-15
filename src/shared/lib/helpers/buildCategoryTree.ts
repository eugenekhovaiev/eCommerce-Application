import getCategories from '../../api/user/products/getCategories';
import Category from '../../types/Category';
// import { LocalizedString } from '@commercetools/platform-sdk';

const buildCategoryTree = async (): Promise<Category[]> => {
  const categories = await getCategories();
  const results = categories.body.results;
  const allNodes = results.map((item) => {
    return item.parent
      ? new Category(item.id, Object.values(item.name)[0], item.parent.id, null, null)
      : new Category(item.id, Object.values(item.name)[0], null, null, null);
  });
  const dictIdtoNode: { [key: string]: Category } = {};
  for (let i = 0; i < allNodes.length; i++) {
    dictIdtoNode[allNodes[i].id] = allNodes[i];
  }

  for (const key in dictIdtoNode) {
    const parentId = dictIdtoNode[key].parentId;
    if (parentId) {
      dictIdtoNode[parentId].appendChild(dictIdtoNode[key]);
      dictIdtoNode[key].parent = dictIdtoNode[parentId];
    }
  }

  const roots = allNodes.filter((item) => !item.parentId);
  return roots;
};

export default buildCategoryTree;
