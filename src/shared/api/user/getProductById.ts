import { ClientResponse, ProductProjection } from '@commercetools/platform-sdk';

import { apiRoot } from './getUserApiRoot';

const getProductById = async (id: string): Promise<ClientResponse<ProductProjection>> => {
  return apiRoot.productProjections().withId({ ID: id }).get().execute();
};

export default getProductById;
