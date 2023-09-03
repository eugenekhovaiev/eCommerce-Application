import { Address } from '@commercetools/platform-sdk';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import getAddressString from '../../shared/lib/helpers/getAddressString';

const AddressRow = (props: { id: string }): JSX.Element => {
  const { userData } = useUserDataContext();
  const addressFromId = userData?.addresses.find((address) => address.id === props.id) as Address;

  const isDefaultShipping = !!(userData?.defaultShippingAddressId === props.id);
  const isDefaultBilling = !!(userData?.defaultBillingAddressId === props.id);

  return (
    <div className={`address-row${isDefaultShipping || isDefaultBilling ? ' address-row_default' : ''}`}>
      <div className="address-row__address">
        {getAddressString(addressFromId)} {isDefaultShipping ? '(default shipping)' : ''}{' '}
        {isDefaultBilling ? '(default billing)' : ''}
      </div>
      <hr />
    </div>
  );
};

export default AddressRow;
