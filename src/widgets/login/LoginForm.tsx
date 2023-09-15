import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';

import { Alert } from '@mui/material';

import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import EmailInput from '../../entities/inputs/EmailInput';
import PasswordInput from '../../entities/inputs/PasswordInput';

import { Form } from '../../shared/types';
import { Customer } from '@commercetools/platform-sdk';

import loginCustomer from '../../shared/api/user/customer/loginCustomer';

import { useNavigate, useLocation } from 'react-router-dom';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import { tokenCache } from '../../shared/api/user/BuildClient';
import createCart from '../../shared/api/user/cart/createCart';
// import tokenCache from '../../shared/api/user/tokenCache';

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

  const { updateUserData } = useUserDataContext();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    try {
      const loginResponse = await loginCustomer(data);
      localStorage.setItem('token', tokenCache.get().token);

      const { customer, cart } = loginResponse.body;
      if (!cart) {
        await createCart();
      }

      setLoginError(false);
      setCustomerData(customer);

      setTimeout(() => {
        updateUserData(customer);
        return navigate(from, { replace: true });
      }, 1500);
    } catch (error) {
      // console.log(error);
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
