import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { Modal, Typography, Button } from '@mui/material';
import { Form } from '../../shared/types';
import { Alert } from '@mui/material';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import NameInput from '../../entities/inputs/NameInput';
import EmailInput from '../../entities/inputs/EmailInput';
import DateOfBirthInput from '../../entities/inputs/DateOfBirthInput';
import formatDate from '../../shared/lib/helpers/formatDate';
import updateCustomer from '../../shared/api/user/updateCustomer';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import closeIcon from '../../shared/assets/close.svg';
import { MyCustomerUpdate } from '@commercetools/platform-sdk';

const DataEditModal = (): JSX.Element => {
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
      const updateQuery: MyCustomerUpdate = {
        version: userData?.version,
        actions: [
          { action: 'setFirstName', firstName: dataToUpdate.firstName },
          { action: 'setLastName', lastName: dataToUpdate.lastName },
          { action: 'changeEmail', email: dataToUpdate.email },
          { action: 'setDateOfBirth', dateOfBirth: formatDate(dataToUpdate.dateOfBirth, 'YYYY-MM-DD') },
        ],
      };
      const updatedCustomerData = (await updateCustomer(updateQuery)).body;
      updateUserData(updatedCustomerData);
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
        setSuccessfullySaved(false);
      }, 1500);
    } catch {
      // console.log(error);
      setSuccessfullySaved(false);
      setRequestError(true);
    }
  };

  return (
    <div className="profile__button-wrapper">
      <Button variant="outlined" color="secondary" onClick={openModal} className="profile__button">
        Edit Profile
      </Button>
      <Modal open={modalIsOpen} onClose={closeModal} className="modal">
        <div className="modal__content">
          <div className="modal__close" onClick={closeModal}>
            <ImageElement src={closeIcon} alt="close-modal" />
          </div>
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
              defaultValue={userData?.dateOfBirth}
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

export default DataEditModal;
