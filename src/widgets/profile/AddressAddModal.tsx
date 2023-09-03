import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { Modal, Typography, Button } from '@mui/material';
import { CustomerUpdateWithId, Form } from '../../shared/types';
import { Alert } from '@mui/material';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import updateCustomer from '../../shared/api/user/updateCustomer';
import RegistrationAddress from '../../entities/registration/RegistrationAddress';
import { CountryProvider } from '../../shared/lib/contexts/СountryContext';
import getAddressString from '../../shared/lib/helpers/getAddressString';
import { BaseAddress } from '@commercetools/platform-sdk';

const AddressAddModal = (): JSX.Element => {
  const { userData, updateUserData } = useUserDataContext();
  // const { userData } = useUserDataContext();

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

  const updateProfile = async (dataToUpdate: Form): Promise<void> => {
    if (userData) {
      const newAddress: BaseAddress = {
        streetName: dataToUpdate.street,
        building: dataToUpdate.building,
        apartment: dataToUpdate.unit,
        city: dataToUpdate.city,
        postalCode: dataToUpdate.postalCode,
        country: dataToUpdate.country,
      };

      const newAddressKey = getAddressString(newAddress);

      const addQuery: CustomerUpdateWithId = {
        id: userData?.id,
        version: userData?.version,
        actions: [
          {
            action: 'addAddress',
            address: {
              key: newAddressKey,
              ...newAddress,
            },
          },
        ],
      };
      const updatedCustomerData = (await updateCustomer(addQuery)).body;
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
        setSuccessfullySaved(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setSuccessfullySaved(false);
      setRequestError(true);
    }
  };

  // const shippingAddress: Address | undefined = userData?.addresses[0];

  return (
    <div>
      <CountryProvider>
        <Button variant="outlined" onClick={openModal} className="profile__button">
          Add Address
        </Button>
        <Modal open={modalIsOpen} onClose={closeModal} className="modal modal_add-address">
          <div className="modal__content">
            <Typography variant="h5">Add Address</Typography>
            <form className="modal__form form" onSubmit={handleSubmit(onSubmit)}>
              <RegistrationAddress control={control} errors={errors} default={true} />
              {successfullySaved && (
                <Alert severity="success" className="form__success-message">
                  Your address has been successfully saved!
                </Alert>
              )}
              {requestError && (
                <Alert severity="error" className="form__error-message">
                  You already have this address!
                </Alert>
              )}
              <ButtonElement type="submit" title="Add" additionalClassName="form__submit" />
            </form>
          </div>
        </Modal>
      </CountryProvider>
    </div>
  );
};

export default AddressAddModal;
