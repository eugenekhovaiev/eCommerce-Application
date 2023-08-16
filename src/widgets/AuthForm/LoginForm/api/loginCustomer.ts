import { CustomerSignin } from '@commercetools/platform-sdk';
import { apiRoot } from '../../../../shared/api/user/UserClient';

import { ClientResponse, CustomerSignInResult } from '@commercetools/platform-sdk';

const loginCustomer = async (loginData: CustomerSignin): Promise<ClientResponse<CustomerSignInResult>> => {
  return apiRoot.me().login().post({ body: loginData }).execute();
};

export default loginCustomer;
