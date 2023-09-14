import { ClientResponse, CategoryPagedQueryResponse } from '@commercetools/platform-sdk';
import credentialsFlowRoot from './apiRoots/credentialsFlowRoot';

// import { apiRoot } from './getUserApiRoot';

const getCategories = async (): Promise<ClientResponse<CategoryPagedQueryResponse>> => {
  // const apiRoot = new CredentialsFlowApiRoot().apiRoot;
  const apiRoot = credentialsFlowRoot();
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
