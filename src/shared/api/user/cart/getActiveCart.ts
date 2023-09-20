import { Cart, ClientResponse } from '@commercetools/platform-sdk';
import tokenFlowRoot from '../apiRoots/tokenFlowRoot';

const getActiveCart = async (): Promise<ClientResponse<Cart>> => {
  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot.me().activeCart().get().execute();
};

export default getActiveCart;
