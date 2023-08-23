import React, { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';

import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

import '../LoginForm/login-form.scss';
import ButtonAuth from '../../shared/UI/Buttons/buttonAuth';
import EmailInput from '../../shared/UI/Inputs/emailInput';
import PasswordInput from '../../shared/UI/Inputs/passwordInput';

import LinkElement from '../../shared/UI/link/LinkElement';

import { IForm } from '../../shared/types';
import { Customer } from '@commercetools/platform-sdk';

import loginCustomer from '../../shared/api/user/loginCustomer';

import { useNavigate, useLocation } from 'react-router-dom';
import { useHeaderContext } from '../header/HeaderContext';

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

  const { updateHeader } = useHeaderContext();

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      const loginResponse = await loginCustomer(data);
      const customer = loginResponse.body.customer;
      setLoginError(false);
      setCustomerData(customer);
      localStorage.setItem('isAuth', 'true');
      setTimeout(() => {
        updateHeader(true);
        return navigate(from, { replace: true });
      }, 1500);
    } catch (error) {
      setCustomerData(null);
      setLoginError(true);
    }
  };

  return (
    <section className="login-form">
      <div className="login-form__wrapper">
        <Typography variant="h3" className="login-form__title">
          Login
        </Typography>
        <LinkElement className="login-form__link" title="Don't have an account yet? Sign up" to="/registration" />
        <form className="login-form__fields" onSubmit={handleSubmit(onSubmit)}>
          <EmailInput control={control} errors={errors} />
          <PasswordInput control={control} errors={errors} />
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
          <ButtonAuth title="LOG IN" />
        </form>
      </div>
    </section>
  );
};
