import { CustomerSignin } from '@commercetools/platform-sdk';

import { ClientResponse, CustomerSignInResult } from '@commercetools/platform-sdk';
import passwordFlowRoot from './apiRoots/passwordFlowRoot';

const loginCustomer = async (loginData: CustomerSignin): Promise<ClientResponse<CustomerSignInResult>> => {
  const apiRoot = passwordFlowRoot(loginData.email, loginData.password);
  return apiRoot.me().login().post({ body: loginData }).execute();
};

export default loginCustomer;
