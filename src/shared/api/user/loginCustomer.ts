import { CustomerSignin } from '@commercetools/platform-sdk';
import { apiRoot } from './getUserApiRoot';

import { ClientResponse, CustomerSignInResult } from '@commercetools/platform-sdk';

const loginCustomer = async (loginData: CustomerSignin): Promise<ClientResponse<CustomerSignInResult>> => {
  return apiRoot.login().post({ body: loginData }).execute();
};

export default loginCustomer;
