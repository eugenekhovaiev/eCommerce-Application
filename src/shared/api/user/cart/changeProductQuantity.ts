import { Cart, ClientResponse } from '@commercetools/platform-sdk';
import tokenFlowRoot from '../apiRoots/tokenFlowRoot';
import getActiveCart from './getActiveCart';

const changeProductQuantity = async (lineItemId: string, newQuantity: number): Promise<ClientResponse<Cart>> => {
  const activeCart = await getActiveCart();
  const activeCartId = activeCart.body.id;
  const activeCartVersion = activeCart.body.version;

  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot
    .me()
    .carts()
    .withId({ ID: activeCartId })
    .post({
      body: {
        version: activeCartVersion,
        actions: [
          {
            action: 'changeLineItemQuantity',
            lineItemId: lineItemId,
            quantity: newQuantity,
          },
        ],
      },
    })
    .execute();
};

export default changeProductQuantity;
