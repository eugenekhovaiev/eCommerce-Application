import { CustomerSignin } from '@commercetools/platform-sdk';
// import { apiRoot } from '../../../../shared/api/user/UserClient';
import { createAuthForPasswordFlow } from '@commercetools/sdk-client-v2';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const authCustomer = (loginData: CustomerSignin) => {
  // return apiRoot.
  return createAuthForPasswordFlow({
    credentials: { user: { username: loginData.email, password: loginData.password } },
  });
};

export default authCustomer;
