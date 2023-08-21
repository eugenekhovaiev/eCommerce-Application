import { BaseAddress } from '@commercetools/platform-sdk';
import { IForm } from '../../types';

const getAddresses = (data: IForm, sameAsShipping: boolean): BaseAddress[] => {
  const shippingAddress: BaseAddress = {
    country: data.countryShipping,
    streetName: data.streetShipping,
    building: data.buildingShipping,
    apartment: data.unitShipping,
    postalCode: data.postalCodeShipping,
    city: data.cityShipping,
  };
  const billingAddress: BaseAddress = {
    country: data.countryBilling,
    streetName: data.streetBilling,
    building: data.buildingBilling,
    apartment: data.unitBilling,
    postalCode: data.postalCodeBilling,
    city: data.cityBilling,
  };

  if (sameAsShipping) {
    return [shippingAddress];
  }
  return [shippingAddress, billingAddress];
};

export default getAddresses;
