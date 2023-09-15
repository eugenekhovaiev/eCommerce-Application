import { Customer } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/platform-sdk';

import tokenFlowRoot from '../apiRoots/tokenFlowRoot';

const updateCustomer = (): Promise<ClientResponse<Customer>> => {
  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot.me().get().execute();
};

export default updateCustomer;
