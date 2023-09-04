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
import { Address, BaseAddress, Customer } from '@commercetools/platform-sdk';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import editIcon from '../../shared/assets/edit.svg';
import closeIcon from '../../shared/assets/close.svg';

const AddressEditModal = (props: { address: Address }): JSX.Element => {
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

  const updateProfile = async (dataToUpdate: Form): Promise<Customer> => {
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

      const changeQuery: CustomerUpdateWithId = {
        id: userData?.id,
        version: userData?.version,
        actions: [
          {
            action: 'changeAddress',
            addressId: props.address.id,
            address: {
              key: newAddressKey,
              ...newAddress,
            },
          },
        ],
      };
      const updatedCustomerData = (await updateCustomer(changeQuery)).body;
      localStorage.setItem('currentUser', JSON.stringify(updatedCustomerData));
      return updatedCustomerData;
    } else {
      throw new Error('User data is missing!');
    }
  };

  const [successfullySaved, setSuccessfullySaved] = useState(false);
  const [requestError, setRequestError] = useState(false);

  const onSubmit: SubmitHandler<Form> = async (data) => {
    try {
      const updatedCustomerData = await updateProfile(data);
      setRequestError(false);
      setSuccessfullySaved(true);
      setTimeout(() => {
        closeModal();
        updateUserData(updatedCustomerData);
        setSuccessfullySaved(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setSuccessfullySaved(false);
      setRequestError(true);
    }
  };

  const [successfullyDeleted, setSuccessfullyDeleted] = useState(false);

  const handleDeleteClick = async (): Promise<void> => {
    try {
      if (userData) {
        const deleteQuery: CustomerUpdateWithId = {
          id: userData?.id,
          version: userData?.version,
          actions: [
            {
              action: 'removeAddress',
              addressId: props.address.id,
            },
          ],
        };
        const updatedCustomerData = (await updateCustomer(deleteQuery)).body;
        localStorage.setItem('currentUser', JSON.stringify(updatedCustomerData));
        setRequestError(false);
        setSuccessfullyDeleted(true);
        setTimeout(() => {
          closeModal();
          updateUserData(updatedCustomerData);
          setSuccessfullyDeleted(false);
        }, 1500);
      } else {
        throw new Error('User data is missing!');
      }
    } catch (error) {
      console.log(error);
      setSuccessfullyDeleted(false);
      setRequestError(true);
    }
  };

  return (
    <div className="address-row__wrapper">
      <CountryProvider>
        <Button variant="outlined" onClick={openModal} className="address-row__button">
          <ImageElement src={editIcon} alt="edit" />
        </Button>
        <Modal open={modalIsOpen} onClose={closeModal} className="modal modal_add-address">
          <div className="modal__content">
            <div className="modal__close" onClick={closeModal}>
              <ImageElement src={closeIcon} alt="close-modal" />
            </div>
            <Typography variant="h5">Edit address</Typography>
            <form className="modal__form form" onSubmit={handleSubmit(onSubmit)}>
              <RegistrationAddress
                control={control}
                errors={errors}
                default={true}
                defaultValues={{
                  defaultCountry: props.address.country,
                  defaultCity: props.address.city,
                  defaultStreet: props.address.streetName,
                  defaultBuilding: props.address.building,
                  defaultUnit: props.address.apartment,
                  defaultPostalCode: props.address.postalCode,
                }}
              />
              {successfullySaved && (
                <Alert severity="success" className="form__success-message">
                  Address has been successfully saved!
                </Alert>
              )}
              {successfullyDeleted && (
                <Alert severity="success" className="form__success-message">
                  Address has been successfully deleted!
                </Alert>
              )}
              {requestError && (
                <Alert severity="error" className="form__error-message">
                  You already have this address!
                </Alert>
              )}
              <div className="modal__buttons">
                <ButtonElement
                  type="button"
                  title="Delete address"
                  additionalClassName="form__delete"
                  onClick={handleDeleteClick}
                />
                <ButtonElement type="submit" title="Save" additionalClassName="form__submit" />
              </div>
            </form>
          </div>
        </Modal>
      </CountryProvider>
    </div>
  );
};

export default AddressEditModal;
