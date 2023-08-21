import { BaseAddress } from '@commercetools/platform-sdk';
import { IForm } from '../../types';

const getAddresses = (data: IForm): BaseAddress[] => {
  return [
    {
      country: data.countryShipping,
      streetName: data.streetShipping,
      building: data.buildingShipping,
      apartment: data.unitShipping,
      postalCode: data.postalCodeShipping,
      city: data.cityShipping,
    },
    {
      country: data.countryBilling,
      streetName: data.streetBilling,
      building: data.buildingBilling,
      apartment: data.unitBilling,
      postalCode: data.postalCodeBilling,
      city: data.cityBilling,
    },
  ];
};

export default getAddresses;
