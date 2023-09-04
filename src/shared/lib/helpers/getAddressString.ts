import { Address } from '@commercetools/platform-sdk';
import COUNTRY_CODE from '../../consts/COUNTRY_CODE';

function getAddressString(addressObj: Address): string {
  const { country, city, streetName, building, apartment, postalCode } = addressObj;
  return `${COUNTRY_CODE[country]}${city ? `, ${city}` : ''}${streetName ? `, ${streetName}` : ''}${
    building ? ` ${building}` : ''
  }${apartment ? `, ${apartment}` : ''}${postalCode ? `, ${postalCode}` : ''}`;
}

export default getAddressString;
