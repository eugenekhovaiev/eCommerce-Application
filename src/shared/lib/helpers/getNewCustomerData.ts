import { Form } from '../../types';
import { MyCustomerDraft } from '@commercetools/platform-sdk';
import getAddresses from './getAddresses';
import dayjs from 'dayjs';

function getNewCustomerData(
  data: Form,
  sameAsShipping: boolean,
  defaultShipping: boolean,
  defaultBilling: boolean,
): MyCustomerDraft {
  const addresses = getAddresses(data, sameAsShipping);
  const defaultBillingAddress = defaultBilling ? (sameAsShipping ? 0 : 1) : undefined;
  const newCustomerData: MyCustomerDraft = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    dateOfBirth: dayjs(data.dateOfBirth).format('YYYY-MM-DD'),
    addresses,
    defaultShippingAddress: defaultShipping ? 0 : undefined,
    defaultBillingAddress: defaultBillingAddress,
  };
  return newCustomerData;
}

export default getNewCustomerData;
