import { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Modal, Typography, Button } from '@mui/material';
import { Form } from '../../shared/types';
import RegistrationUserInfo from '../../entities/registration/RegistrationUserInfo';
import RegistrationAddress from '../../entities/registration/RegistrationAddress';
import CheckboxElement from '../../shared/UI/checkboxElement/CheckboxElement';
import { Customer } from '@commercetools/platform-sdk';
import { Alert } from '@mui/material';
import { CountryProvider } from '../../shared/lib/contexts/СountryContext';

const ProfileModal: React.FC = () => {
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
            <RegistrationUserInfo control={control} errors={errors} />
            <Typography variant="h5" className="form__title">
              Shipping Address
            </Typography>
            <RegistrationAddress isShipping={true} control={control} errors={errors} />
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
            {!sameAsShipping && <RegistrationAddress isShipping={false} control={control} errors={errors} />}
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
