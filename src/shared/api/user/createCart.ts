import { Cart, ClientResponse } from '@commercetools/platform-sdk';
import tokenFlowRoot from './apiRoots/tokenFlowRoot';

const createCart = async (): Promise<ClientResponse<Cart>> => {
  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot
    .me()
    .carts()
    .post({ body: { currency: 'USD' } })
    .execute();
};

export default createCart;
