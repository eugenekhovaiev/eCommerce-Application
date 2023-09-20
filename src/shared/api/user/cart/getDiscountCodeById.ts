import { ClientResponse, DiscountCode } from '@commercetools/platform-sdk';
import tokenFlowRoot from '../apiRoots/tokenFlowRoot';

const getActiveCart = async (discountCodeId: string): Promise<ClientResponse<DiscountCode>> => {
  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot.discountCodes().withId({ ID: discountCodeId }).get().execute();
};

export default getActiveCart;
