import { IForm } from '../../types';
import { CustomerDraft } from '@commercetools/platform-sdk';
import getAddresses from './getAddresses';
import dayjs from 'dayjs';

function getNewCustomerData(
  data: IForm,
  sameAsShipping: boolean,
  defaulthipping: boolean,
  defaultBilling: boolean,
): CustomerDraft {
  const addresses = getAddresses(data, sameAsShipping);
  const defaultBillingAddress = defaultBilling ? (sameAsShipping ? 0 : 1) : undefined;
  const newCustomerData: CustomerDraft = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    dateOfBirth: dayjs(data.dateOfBirth).format('YYYY-MM-DD'),
    addresses,
    defaultShippingAddress: defaulthipping ? 0 : undefined,
    shippingAddresses: [0],
    defaultBillingAddress: defaultBillingAddress,
    billingAddresses: sameAsShipping ? [0] : [1],
  };
  return newCustomerData;
}

export default getNewCustomerData;
