import { Customer } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/platform-sdk';

import { apiRoot } from './getUserApiRoot';
import { CustomerUpdateWithId } from '../../types';

const updateCustomer = (dataToUpdate: CustomerUpdateWithId): Promise<ClientResponse<Customer>> => {
  return apiRoot
    .customers()
    .withId({ ID: dataToUpdate.id })
    .post({ body: { version: dataToUpdate.version, actions: dataToUpdate.actions } })
    .execute();
};

export default updateCustomer;
