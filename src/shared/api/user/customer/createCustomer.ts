import { CustomerDraft, CustomerSignInResult } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/platform-sdk';
import credentialsFlowRoot from '../apiRoots/credentialsFlowRoot';

// import { apiRoot } from './getUserApiRoot';

const createCustomer = (newCustomerData: CustomerDraft): Promise<ClientResponse<CustomerSignInResult>> => {
  const apiRoot = credentialsFlowRoot();
  return apiRoot
    .customers()
    .post({
      body: newCustomerData,
    })
    .execute();
};

export default createCustomer;
