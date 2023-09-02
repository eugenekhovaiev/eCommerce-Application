import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { Modal, Typography, Button } from '@mui/material';
import { CustomerUpdateWithId, Form } from '../../shared/types';
// import { Customer } from '@commercetools/platform-sdk';
import { Alert } from '@mui/material';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import NameInput from '../../entities/inputs/NameInput';
import EmailInput from '../../entities/inputs/EmailInput';
import DateOfBirthInput from '../../entities/inputs/DateOfBirthInput';
import updateCustomer from '../../shared/api/user/updateCustomer';

const ProfileDataModal = (): JSX.Element => {
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

  const updateProfile = async (dataToUpdate: {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
  }): Promise<void> => {
    if (userData) {
      const updateQuery: CustomerUpdateWithId = {
        id: userData?.id,
        version: userData?.version,
        actions: [
          { action: 'setFirstName', firstName: dataToUpdate.firstName },
          { action: 'setLastName', lastName: dataToUpdate.lastName },
          { action: 'changeEmail', email: dataToUpdate.email },
          // { action: 'setDateOfBirth', dateOfBirth: dataToUpdate.dateOfBirth },
          { action: 'setDateOfBirth', dateOfBirth: '2001-01-13' },
        ],
      };
      const updatedCustomerData = (await updateCustomer(updateQuery)).body;
      updateUserData(updatedCustomerData);
      localStorage.setItem('currentUser', JSON.stringify(updatedCustomerData));
    } else {
      throw new Error('User data is missing!');
    }
  };

  const [successfullySaved, setSuccessfullySaved] = useState(false);
  const [requestError, setRequestError] = useState(false);

  const onSubmit: SubmitHandler<Form> = async (data) => {
    try {
      await updateProfile(data);
      setRequestError(false);
      setSuccessfullySaved(true);
      setTimeout(() => {
        closeModal();
      }, 1500);
    } catch {
      setSuccessfullySaved(false);
      setRequestError(true);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={openModal} className="profile__button">
        Edit Profile
      </Button>
      <Modal open={modalIsOpen} onClose={closeModal} className="modal">
        <div className="modal__content">
          <Typography variant="h5">Edit Profile</Typography>
          <form className="modal__form form" onSubmit={handleSubmit(onSubmit)}>
            <NameInput
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
            <DateOfBirthInput
              className="form__input form__input_dob"
              control={control}
              errors={errors}
              // defaultValue={props.defaultValues?.defaultDateOfBirth}
            />
            {successfullySaved && (
              <Alert severity="success" className="form__success-message">
                Your data has been successfully saved!
              </Alert>
            )}
            {requestError && (
              <Alert severity="error" className="form__error-message">
                User with such email already exists. Try another one.
              </Alert>
            )}
            <ButtonElement type="submit" title="Save" additionalClassName="form__submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileDataModal;
