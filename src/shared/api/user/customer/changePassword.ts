import { Customer, MyCustomerChangePassword } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/platform-sdk';
import tokenFlowRoot from '../apiRoots/tokenFlowRoot';

const changePassword = (dataToPasswordChange: MyCustomerChangePassword): Promise<ClientResponse<Customer>> => {
  const apiRoot = tokenFlowRoot(`Bearer ${localStorage.getItem('token')}`);
  return apiRoot
    .me()
    .password()
    .post({
      body: {
        version: dataToPasswordChange.version,
        currentPassword: dataToPasswordChange.currentPassword,
        newPassword: dataToPasswordChange.newPassword,
      },
    })
    .execute();
};

export default changePassword;
