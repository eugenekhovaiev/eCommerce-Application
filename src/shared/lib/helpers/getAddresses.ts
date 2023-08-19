import { IForm } from '../../types';
import { IAddress } from '../../types';

const getAddresses = (data: IForm, sameAsShipping: boolean): IAddress[] => {
  const shippingAddress = {
    country: data.countryShipping,
    streetName: data.streetShipping,
    building: data.buildingShipping,
    apartment: data.unitShipping,
    postalCode: data.postalCodeShipping,
    city: data.cityShipping,
  };
  const billingAddress = {
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
