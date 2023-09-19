import { ClientResponse, CategoryPagedQueryResponse } from '@commercetools/platform-sdk';
import tokenFlowRoot from '../apiRoots/tokenFlowRoot';

const getCategories = async (): Promise<ClientResponse<CategoryPagedQueryResponse>> => {
  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot
    .categories()
    .get({
      queryArgs: {
        limit: 50,
      },
    })
    .execute();
};

export default getCategories;
