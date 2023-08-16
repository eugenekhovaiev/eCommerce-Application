import React, { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';

import Typography from '@mui/material/Typography';

import '../LoginForm/login-form.css';
import ButtonAuth from '../../../shared/UI/Buttons/buttonAuth';
import { EmailInput } from '../../../shared/UI/Inputs/emailInput';
import { PasswordInput } from '../../../shared/UI/Inputs/passwordInput';

import { ISignInForm } from '../../../shared/types';
import { Customer } from '@commercetools/platform-sdk';

import loginCustomer from './api/loginCustomer';

import redirectToMainPage from './lib/redirectToMainPage';

// eslint-disable-next-line max-lines-per-function
export const LoginForm: React.FC = (): JSX.Element => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  const [customerData, setCustomerData] = useState<Customer | null>(null);
  const [loginError, setLoginError] = useState(false);

  const onSubmit: SubmitHandler<ISignInForm> = async (data) => {
    try {
      const loginResponse = await loginCustomer(data);
      const customer = loginResponse.body.customer;
      setLoginError(false);
      setCustomerData(customer);
      redirectToMainPage();
    } catch (error) {
      setCustomerData(null);
      setLoginError(true);
    }
  };

  return (
    <div className="login-form">
      <Typography variant="h3" className="login-form__title">
        Login
      </Typography>
      {customerData && (
        <Typography className="login-form__success-message">Welcome, {customerData.firstName}!</Typography>
      )}
      {loginError && (
        <Typography className="login-form__error-message">Wrong email or password! Please, retry.</Typography>
      )}
      <form className="login-form__fields" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput control={control} errors={errors} />
        <PasswordInput control={control} errors={errors} />
        <ButtonAuth title="LOG IN" />
      </form>
    </div>
  );
};
