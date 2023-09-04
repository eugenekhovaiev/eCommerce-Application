import { Address } from '@commercetools/platform-sdk';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import getAddressString from '../../shared/lib/helpers/getAddressString';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import updateCustomer from '../../shared/api/user/updateCustomer';
import { CustomerUpdateWithId } from '../../shared/types';

const AddressRow = (props: { id: string }): JSX.Element => {
  const { userData, updateUserData } = useUserDataContext();
  const addressFromId = userData?.addresses.find((address) => address.id === props.id) as Address;

  const isDefaultShipping = !!(userData?.defaultShippingAddressId === props.id);
  const isDefaultBilling = !!(userData?.defaultBillingAddressId === props.id);

  const handleDefaultShippingClick = async (): Promise<void> => {
    try {
      if (userData) {
        const setDefaultShippingQuery: CustomerUpdateWithId = {
          id: userData?.id,
          version: userData?.version,
          actions: [
            {
              action: 'setDefaultShippingAddress',
              addressId: props.id,
            },
          ],
        };
        const updatedCustomerData = (await updateCustomer(setDefaultShippingQuery)).body;
        updateUserData(updatedCustomerData);
        localStorage.setItem('currentUser', JSON.stringify(updatedCustomerData));
      } else {
        throw new Error('User data is missing!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDefaultBillingClick = async (): Promise<void> => {
    try {
      if (userData) {
        const setDefaultBillingQuery: CustomerUpdateWithId = {
          id: userData?.id,
          version: userData?.version,
          actions: [
            {
              action: 'setDefaultBillingAddress',
              addressId: props.id,
            },
          ],
        };
        const updatedCustomerData = (await updateCustomer(setDefaultBillingQuery)).body;
        updateUserData(updatedCustomerData);
        localStorage.setItem('currentUser', JSON.stringify(updatedCustomerData));
      } else {
        throw new Error('User data is missing!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`address-row${isDefaultShipping || isDefaultBilling ? ' address-row_default' : ''}`}>
      <div className="address-row__address">
        {getAddressString(addressFromId)} {isDefaultShipping ? '(default shipping)' : ''}{' '}
        {isDefaultBilling ? '(default billing)' : ''}
      </div>
      <div className="address-row__defaults-settings">
        Set as default:
        <ButtonElement
          additionalClassName="address-row__button"
          type="button"
          variant="outlined"
          title="Shipping"
          onClick={handleDefaultShippingClick}
        />
        <ButtonElement
          additionalClassName="address-row__button"
          type="button"
          variant="outlined"
          title="Billing"
          onClick={handleDefaultBillingClick}
        />
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default AddressRow;
