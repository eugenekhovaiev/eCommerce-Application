import { IForm } from '../../types';
import { CustomerDraft } from '@commercetools/platform-sdk';
import getAddresses from './getAddresses';
import dayjs from 'dayjs';

function getNewCustomerData(data: IForm, sameAsShipping: boolean): CustomerDraft {
  const addresses = getAddresses(data, sameAsShipping);
  const newCustomerData: CustomerDraft = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    dateOfBirth: dayjs(data.dateOfBirth).format('YYYY-MM-DD'),
    addresses,
    defaultShippingAddress: 0,
    shippingAddresses: [0],
    defaultBillingAddress: sameAsShipping ? 0 : 1,
    billingAddresses: sameAsShipping ? [0] : [1],
  };
  return newCustomerData;
}

export default getNewCustomerData;
