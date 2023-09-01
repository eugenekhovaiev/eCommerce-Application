import { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Modal, Typography, Button } from '@mui/material';
import { Form } from '../../shared/types';
import RegistrationUserInfo from '../../entities/registration/RegistrationUserInfo';
import RegistrationAddress from '../../entities/registration/RegistrationAddress';
import CheckboxElement from '../../shared/UI/checkboxElement/CheckboxElement';
import { Address, Customer } from '@commercetools/platform-sdk';
import { Alert } from '@mui/material';
import { CountryProvider } from '../../shared/lib/contexts/СountryContext';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
// import NameInput from '../../entities/inputs/NameInput';
// import EmailInput from '../../entities/inputs/EmailInput';
// import PasswordInput from '../../entities/inputs/PasswordInput';
// import DateOfBirthInput from '../../entities/inputs/DateOfBirthInput';

const ProfileModal = (): JSX.Element => {
  const { userData } = useUserDataContext();
  const shippingAddress: Address | undefined = userData?.addresses[0];
  const billingAddress: Address | undefined =
    userData?.addresses.length === 1 ? shippingAddress : userData?.addresses[1];
  // console.log(userData);

  const { control } = useForm<Form>();
  const { errors } = useFormState({
    control,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const saveProfile = (): void => {
    closeModal();
  };

  const [customerData] = useState<Customer | null>(null);
  const [registerError] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [defaultShipping, setDefaulShipping] = useState(false);
  const [defaultBilling, setDefaultBilling] = useState(false);

  const handleCheckboxClick = (): void => {
    setSameAsShipping(!sameAsShipping);
  };
  const handleDefaultShippingClick = (): void => {
    setDefaulShipping(!defaultShipping);
  };
  const handleDefaultBillingClick = (): void => {
    setDefaultBilling(!defaultBilling);
  };

  return (
    <div>
      <CountryProvider>
        <Button variant="outlined" onClick={openModal} className="profile__edit">
          Edit Profile
        </Button>
        <Modal open={modalIsOpen} onClose={closeModal} className="modal">
          <div className="modal__content">
            <Typography variant="h5">Edit Profile</Typography>
            {/* <NameInput
              variant="outlined"
              className="form__input form__input_name"
              isFirstName={true}
              control={control}
              errors={errors}
              defaultValue={userData?.firstName}
            />
            <NameInput
              variant="outlined"
              className="form__input form__input_name"
              isFirstName={false}
              control={control}
              errors={errors}
              defaultValue={userData?.lastName}
            />
            <EmailInput
              variant="outlined"
              className="form__input form__input_email"
              control={control}
              errors={errors}
              defaultValue={userData?.email}
            />
            <PasswordInput
              className="form__input form__input_password"
              variant="outlined"
              control={control}
              errors={errors}
              label="Enter new password"
            /> */}
            {/* <DateOfBirthInput
              className="form__input form__input_dob"
              control={control}
              errors={errors}
              value={userData?.dateOfBirth}
            /> */}
            <RegistrationUserInfo
              control={control}
              errors={errors}
              defaultValues={{
                defaultFirstName: userData?.firstName,
                defaultLastName: userData?.lastName,
                defaultEmail: userData?.email,
                passwordLabel: 'Enter new password',
                defaultDateOfBirth: userData?.dateOfBirth,
              }}
            />
            <Typography variant="h5" className="form__title">
              Shipping Address
            </Typography>
            {shippingAddress && (
              <RegistrationAddress
                isShipping={true}
                control={control}
                errors={errors}
                defaultValues={{
                  defaultStreet: shippingAddress.streetName,
                  defaultBuilding: shippingAddress.building,
                  defaultUnit: shippingAddress.apartment,
                  defaultCity: shippingAddress.city,
                  defaultPostalCode: shippingAddress.postalCode,
                  defaultCountry: shippingAddress.country,
                }}
              />
            )}
            <div className="form__checkbox-wrapper">
              <div className="form__checkbox">
                <CheckboxElement onChange={handleDefaultShippingClick} checked={defaultShipping} />
                Set this address as a default shipping address?
              </div>
              <div className="form__checkbox">
                <CheckboxElement onChange={handleCheckboxClick} checked={sameAsShipping} />
                Set this address as a billing address?
              </div>
            </div>
            {!sameAsShipping && (
              <Typography variant="h5" className="form__title">
                Billing Address
              </Typography>
            )}
            {!sameAsShipping && billingAddress && (
              <RegistrationAddress
                isShipping={false}
                control={control}
                errors={errors}
                defaultValues={{
                  defaultStreet: billingAddress.streetName,
                  defaultBuilding: billingAddress.building,
                  defaultUnit: billingAddress.apartment,
                  defaultCity: billingAddress.city,
                  defaultPostalCode: billingAddress.postalCode,
                  defaultCountry: billingAddress.country,
                }}
              />
            )}
            <div className="form__checkbox-wrapper">
              <div className="form__checkbox">
                <CheckboxElement onChange={handleDefaultBillingClick} checked={defaultBilling} />
                Set this address as a default billing address?
              </div>
            </div>
            {customerData && (
              <Alert severity="success" className="registration__success-message">
                Welcome, {customerData.firstName}!
              </Alert>
            )}
            {registerError && (
              <Alert severity="error" className="registration__error-message">
                User with such email already exists. Try to log in.
              </Alert>
            )}
            <div className="modal__buttons">
              <Button variant="contained" onClick={saveProfile} className="modal__button">
                Save
              </Button>
              <Button variant="contained" onClick={closeModal} className="modal__button">
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </CountryProvider>
    </div>
  );
};

export default ProfileModal;
