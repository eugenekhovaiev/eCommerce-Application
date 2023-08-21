/* eslint-disable max-lines-per-function */
import { IForm } from '../../types';
import { IAddress } from '../../types';

const getAddresses = (data: IForm, sameAsShipping: boolean): IAddress[] => {
  const shippingAddress: IAddress = {
    country: data.countryShipping,
  };
  const billingAddress: IAddress = {
    country: data.countryBilling,
  };

  if (data.streetShipping) {
    shippingAddress.streetName = data.streetShipping;
  }
  if (data.buildingShipping) {
    shippingAddress.building = data.buildingShipping;
  }
  if (data.unitShipping) {
    shippingAddress.apartment = data.unitShipping;
  }
  if (data.postalCodeShipping) {
    shippingAddress.postalCode = data.postalCodeShipping;
  }
  if (data.cityShipping) {
    shippingAddress.city = data.cityShipping;
  }

  if (data.streetBilling) {
    billingAddress.streetName = data.streetBilling;
  }
  if (data.buildingBilling) {
    billingAddress.building = data.buildingBilling;
  }
  if (data.unitBilling) {
    billingAddress.apartment = data.unitBilling;
  }
  if (data.postalCodeBilling) {
    billingAddress.postalCode = data.postalCodeBilling;
  }
  if (data.cityBilling) {
    billingAddress.city = data.cityBilling;
  }

  if (sameAsShipping) {
    return [shippingAddress];
  }
  return [shippingAddress, billingAddress];
};

export default getAddresses;
