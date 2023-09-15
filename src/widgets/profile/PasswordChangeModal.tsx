import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { Modal, Typography, Button } from '@mui/material';
import { Form } from '../../shared/types';
import { Alert } from '@mui/material';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import PasswordInput from '../../entities/inputs/PasswordInput';
import { MyCustomerChangePassword } from '@commercetools/platform-sdk';
import changePassword from '../../shared/api/user/customer/changePassword';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import closeIcon from '../../shared/assets/close.svg';

const PasswordChangeModal = (): JSX.Element => {
  const { userData, updateUserData } = useUserDataContext();

  const { handleSubmit, control } = useForm<Form>();
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

  const updateProfile = async (dataForChange: { currentPassword: string; newPassword: string }): Promise<void> => {
    if (userData) {
      const changeQuery: MyCustomerChangePassword = {
        version: userData?.version,
        currentPassword: dataForChange.currentPassword,
        newPassword: dataForChange.newPassword,
      };
      const updatedCustomerData = (await changePassword(changeQuery)).body;
      updateUserData(updatedCustomerData);
    } else {
      throw new Error('User data is missing!');
    }
  };

  const [successfullyChanged, setSuccessfullyChanges] = useState(false);
  const [requestError, setRequestError] = useState<'' | 'invalid-confirm-password' | 'invalid-current-password'>('');

  const onSubmit: SubmitHandler<Form> = async (data) => {
    try {
      if (data.newPassword === data.confirmPassword) {
        await updateProfile(data);
        setRequestError('');
        setSuccessfullyChanges(true);
        setTimeout(() => {
          closeModal();
          setSuccessfullyChanges(false);
        }, 1500);
      } else {
        setSuccessfullyChanges(false);
        setRequestError('invalid-confirm-password');
      }
    } catch {
      setSuccessfullyChanges(false);
      setRequestError('invalid-current-password');
    }
  };

  return (
    <div className="profile__button-wrapper">
      <Button variant="outlined" color="secondary" onClick={openModal} className="profile__button">
        Change Password
      </Button>
      <Modal open={modalIsOpen} onClose={closeModal} className="modal">
        <div className="modal__content">
          <div className="modal__close" onClick={closeModal}>
            <ImageElement src={closeIcon} alt="close-modal" />
          </div>
          <Typography variant="h5">Change Password</Typography>
          <form className="modal__form form" onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput
              className="form__input form__input_password"
              variant="outlined"
              control={control}
              errors={errors}
              label="Enter current password"
              name="currentPassword"
            />
            <PasswordInput
              className="form__input form__input_password"
              variant="outlined"
              control={control}
              errors={errors}
              label="Enter new password"
              name="newPassword"
            />
            <PasswordInput
              className="form__input form__input_password"
              variant="outlined"
              control={control}
              errors={errors}
              label="Confirm new password"
              name="confirmPassword"
            />
            {successfullyChanged && (
              <Alert severity="success" className="form__success-message">
                Your password has been successfully changed!
              </Alert>
            )}
            {requestError === 'invalid-current-password' && (
              <Alert severity="error" className="form__error-message">
                Invalid current password, try again!
              </Alert>
            )}
            {requestError === 'invalid-confirm-password' && (
              <Alert severity="error" className="form__error-message">
                Password and password confirmation values must be the same! Change inputs and try again!
              </Alert>
            )}
            <ButtonElement type="submit" title="Save" additionalClassName="form__submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default PasswordChangeModal;
