import { ClientResponse, ProductProjection } from '@commercetools/platform-sdk';
import tokenFlowRoot from '../apiRoots/tokenFlowRoot';

const getProductById = async (id: string): Promise<ClientResponse<ProductProjection>> => {
  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot.productProjections().withId({ ID: id }).get().execute();
};

export default getProductById;
