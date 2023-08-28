import { ClientResponse, ProductPagedQueryResponse } from '@commercetools/platform-sdk';

import { apiRoot } from './getUserApiRoot';

const getProducts = async (): Promise<ClientResponse<ProductPagedQueryResponse>> => {
  return apiRoot.products().get().execute();
};

export default getProducts;
