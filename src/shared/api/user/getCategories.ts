import { ClientResponse, CategoryPagedQueryResponse } from '@commercetools/platform-sdk';

import { apiRoot } from './getUserApiRoot';

const getCategories = async (): Promise<ClientResponse<CategoryPagedQueryResponse>> => {
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
