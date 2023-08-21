import React, { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

import '../LoginForm/login-form.css';
import ButtonAuth from '../../shared/UI/Buttons/buttonAuth';
import EmailInput from '../../shared/UI/Inputs/emailInput';
import PasswordInput from '../../shared/UI/Inputs/passwordInput';

import { IForm } from '../../shared/types';
import { Customer } from '@commercetools/platform-sdk';

import loginCustomer from '../../shared/api/user/loginCustomer';

export const LoginForm: React.FC = (): JSX.Element => {
  const { handleSubmit, control } = useForm<IForm>();
  const { errors } = useFormState({
    control,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [customerData, setCustomerData] = useState<Customer | null>(null);
  const [loginError, setLoginError] = useState(false);

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      const loginResponse = await loginCustomer(data);
      const customer = loginResponse.body.customer;
      setLoginError(false);
      setCustomerData(customer);
      setTimeout(() => {
        return navigate(from, { replace: true });
      }, 1500);
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
        <Alert severity="success" className="login-form__success-message">
          Welcome, {customerData.firstName}!
        </Alert>
      )}
      {loginError && (
        <Alert severity="error" className="login-form__error-message">
          Wrong email or password! Please, retry.
        </Alert>
      )}
      <form className="login-form__fields" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput control={control} errors={errors} />
        <PasswordInput control={control} errors={errors} />
        <ButtonAuth title="LOG IN" />
      </form>
    </div>
  );
};
