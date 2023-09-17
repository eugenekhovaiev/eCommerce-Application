import { CustomerSignInResult, MyCustomerDraft } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/platform-sdk';
import tokenFlowRoot from '../apiRoots/tokenFlowRoot';

const createCustomer = (newCustomerData: MyCustomerDraft): Promise<ClientResponse<CustomerSignInResult>> => {
  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot
    .me()
    .signup()
    .post({
      body: newCustomerData,
    })
    .execute();
};

export default createCustomer;
