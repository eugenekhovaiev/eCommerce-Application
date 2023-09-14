import { Customer, MyCustomerUpdate } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/platform-sdk';

import tokenFlowRoot from './apiRoots/tokenFlowRoot';

const updateCustomer = (dataToUpdate: MyCustomerUpdate): Promise<ClientResponse<Customer>> => {
  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot
    .me()
    .post({ body: { version: dataToUpdate.version, actions: dataToUpdate.actions } })
    .execute();
};

export default updateCustomer;
