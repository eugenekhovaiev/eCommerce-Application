import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';

import { Alert } from '@mui/material';

import ButtonElement from '../../shared/UI/button/ButtonElement';
import EmailInput from '../../entities/inputs-comps/EmailInput';
import PasswordInput from '../../entities/inputs-comps/PasswordInput';

import { Form } from '../../shared/types';
import { Customer } from '@commercetools/platform-sdk';

import loginCustomer from '../../shared/api/user/loginCustomer';

import { useNavigate, useLocation } from 'react-router-dom';
import { useLoggedInContext } from '../../shared/lib/contexts/LoggedInContext';

const LoginForm = (): JSX.Element => {
  const { handleSubmit, control } = useForm<Form>();
  const { errors } = useFormState({
    control,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [customerData, setCustomerData] = useState<Customer | null>(null);
  const [loginError, setLoginError] = useState(false);

  const { updateLoggedIn } = useLoggedInContext();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    try {
      const loginResponse = await loginCustomer(data);
      const customer = loginResponse.body.customer;
      setLoginError(false);
      setCustomerData(customer);
      localStorage.setItem('isAuth', 'true');
      setTimeout(() => {
        updateLoggedIn(true);
        return navigate(from, { replace: true });
      }, 1500);
    } catch (error) {
      setCustomerData(null);
      setLoginError(true);
    }
  };

  return (
    <form className="form login__form" onSubmit={handleSubmit(onSubmit)}>
      <EmailInput variant="outlined" className="form__input form__input_email" control={control} errors={errors} />
      <PasswordInput
        variant="outlined"
        className="form__input form__input_password"
        control={control}
        errors={errors}
      />
      {customerData && (
        <Alert severity="success" className="form__success-message">
          Welcome, {customerData.firstName}!
        </Alert>
      )}
      {loginError && (
        <Alert severity="error" className="form__error-message">
          Wrong email or password! Please, retry.
        </Alert>
      )}
      <ButtonElement type="submit" additionalClassName="form__submit" title="LOG IN" />
    </form>
  );
};

export default LoginForm;
