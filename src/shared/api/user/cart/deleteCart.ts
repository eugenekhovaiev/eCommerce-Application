import { Cart, ClientResponse } from '@commercetools/platform-sdk';
import tokenFlowRoot from '../apiRoots/tokenFlowRoot';
import getActiveCart from './getActiveCart';

const deleteCart = async (): Promise<ClientResponse<Cart>> => {
  const activeCart = await getActiveCart();
  const activeCartId = activeCart.body.id;
  const activeCartVersion = activeCart.body.version;

  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot
    .me()
    .carts()
    .withId({ ID: activeCartId })
    .delete({ queryArgs: { version: activeCartVersion } })
    .execute();
};

export default deleteCart;
