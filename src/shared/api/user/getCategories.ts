import { ClientResponse, CategoryPagedQueryResponse } from '@commercetools/platform-sdk';

import { apiRoot } from './getUserApiRoot';

const getCategories = async (): Promise<ClientResponse<CategoryPagedQueryResponse>> => {
  return apiRoot.categories().get().execute();
};

export default getCategories;
