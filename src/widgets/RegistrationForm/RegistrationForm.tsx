/* eslint-disable max-lines-per-function */
import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

import { IForm } from '../../shared/types';
import { Customer, CustomerDraft, CustomerSignin } from '@commercetools/platform-sdk';

import EmailInput from '../../shared/UI/Inputs/emailInput';
import PasswordInput from '../../shared/UI/Inputs/passwordInput';
import FirstNameInput from '../../shared/UI/Inputs/FirstNameInput';
import LastNameInput from '../../shared/UI/Inputs/LastNameInput';
import CityInput from '../../shared/UI/Inputs/address/CityInput';
import CountryInput from '../../shared/UI/Inputs/address/CountryInput';
import PostalCodeInput from '../../shared/UI/Inputs/address/PostalCodeInput';
import StreetInput from '../../shared/UI/Inputs/address/StreetInput';
import DateOfBirthInput from '../../shared/UI/Inputs/DateOfBirthInput';
import ButtonAuth from '../../shared/UI/Buttons/buttonAuth';

import createCustomer from './api/createCustomer';
// TODO change structure to avoid cross-module import
import loginCustomer from '../AuthForm/LoginForm/api/loginCustomer';

import './RegistrationForm.scss';

const RegistrationForm = (): JSX.Element => {
  const { handleSubmit, control } = useForm<IForm>();
  const { errors } = useFormState({
    control,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [customerData, setCustomerData] = useState<Customer | null>(null);
  const [registerError, setRegisterError] = useState(false);

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    // console.log(data);

    const newCustomerData: CustomerDraft = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      dateOfBirth: '1970-01-01',
      addresses: [
        {
          streetName: 'Бумажная',
          building: '42',
          postalCode: '03228',
          city: 'Крижополь',
          country: 'UA',
        },
      ],
    };

    try {
      await createCustomer(newCustomerData);

      const loginData: CustomerSignin = {
        email: data.email,
        password: data.password,
      };
      const loginResponse = await loginCustomer(loginData);
      const customer = loginResponse.body.customer;

      setRegisterError(false);
      setCustomerData(customer);
      setTimeout(() => {
        return navigate(from, { replace: true });
      }, 1500);
    } catch (error) {
      // TODO track error type
      console.log(error);

      setCustomerData(null);
      setRegisterError(true);
    }
  };

  return (
    <form className="registration__form form" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="registration__user-info">
        <FirstNameInput variant="outlined" className="form__input form__input_name" control={control} errors={errors} />
        <LastNameInput variant="outlined" className="form__input form__input_name" control={control} errors={errors} />
        <EmailInput variant="outlined" className="form__input form__input_email" control={control} errors={errors} />
        <PasswordInput className="form__input form__input_password" control={control} errors={errors} />
        <DateOfBirthInput className="form__input form__input_dob" control={control} errors={errors} />
      </div>
      <Typography variant="h5" className="form__title">
        Address
      </Typography>
      <div className="registration__address-info">
        <StreetInput variant="outlined" className="form__input form__input_street" control={control} errors={errors} />
        <CityInput variant="outlined" className="form__input form__input_city" control={control} errors={errors} />
        <PostalCodeInput variant="outlined" className="form__input form__input_zip" control={control} errors={errors} />
        <CountryInput className="form__input form__input_country" control={control} errors={errors} />
      </div>
      <ButtonAuth title="Register" className="form__submit" />
    </form>
  );
};

export default RegistrationForm;
