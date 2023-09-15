import { ClientResponse, ProductProjection } from '@commercetools/platform-sdk';
import credentialsFlowRoot from '../apiRoots/credentialsFlowRoot';

// import { apiRoot } from './getUserApiRoot';

const getProductById = async (id: string): Promise<ClientResponse<ProductProjection>> => {
  const apiRoot = credentialsFlowRoot();
  return apiRoot.productProjections().withId({ ID: id }).get().execute();
};

export default getProductById;
