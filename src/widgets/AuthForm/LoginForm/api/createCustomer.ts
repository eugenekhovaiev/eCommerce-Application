import { apiRoot } from '../../../../shared/api/user/UserClient';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createCustomer = () => {
  return apiRoot
    .customers()
    .post({
      body: {
        email: 'test@test.com',
        password: 'testPassword',
        firstName: 'TestFirstName',
        lastName: 'TestLastName',
      },
    })
    .execute();
};

export default createCustomer;
