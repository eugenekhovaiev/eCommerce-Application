import { CustomerDraft } from '@commercetools/platform-sdk';
import { apiRoot } from '../../../../shared/api/user/UserClient';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createCustomer = (newCustomerData: CustomerDraft) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testCustomerDraft: CustomerDraft = {
    email: 'test@test.com',
    password: 'testPassword1-',
    firstName: 'TestFirstName',
    lastName: 'TestLastName',
  };

  return apiRoot
    .customers()
    .post({
      body: newCustomerData,
    })
    .execute();
};

export default createCustomer;
