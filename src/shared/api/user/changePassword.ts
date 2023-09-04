import { Customer, CustomerChangePassword } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/platform-sdk';

import { apiRoot } from './getUserApiRoot';

const changePassword = (dataToPasswordChange: CustomerChangePassword): Promise<ClientResponse<Customer>> => {
  return apiRoot
    .customers()
    .password()
    .post({
      body: {
        id: dataToPasswordChange.id,
        version: dataToPasswordChange.version,
        currentPassword: dataToPasswordChange.currentPassword,
        newPassword: dataToPasswordChange.newPassword,
      },
    })
    .execute();
};

export default changePassword;
