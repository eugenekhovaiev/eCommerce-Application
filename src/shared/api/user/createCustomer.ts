import { CustomerDraft, CustomerSignInResult } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/platform-sdk';

import { apiRoot } from './getUserApiRoot';

const createCustomer = (newCustomerData: CustomerDraft): Promise<ClientResponse<CustomerSignInResult>> => {
  return apiRoot
    .customers()
    .post({
      body: newCustomerData,
    })
    .execute();
};

export default createCustomer;
