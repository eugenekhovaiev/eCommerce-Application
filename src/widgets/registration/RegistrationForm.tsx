import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

import { Customer, CustomerSignin } from '@commercetools/platform-sdk';

import RegistrationAddress from '../../entities/registration/RegistrationAddress';
import RegistrationUserInfo from '../../entities/registration/RegistrationUserInfo';
import getNewCustomerData from '../../shared/lib/helpers/getNewCustomerData';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import { CountryProvider } from '../../shared/lib/contexts/СountryContext';
import CheckboxElement from '../../shared/UI/checkboxElement/CheckboxElement';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';

import createCustomer from '../../shared/api/user/customer/createCustomer';
import loginCustomer from '../../shared/api/user/customer/loginCustomer';
import { Form } from '../../shared/types';
import { passwordTokenCache } from '../../shared/api/user/BuildClient';
import createCart from '../../shared/api/user/cart/createCart';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';

const RegistrationForm = (): JSX.Element => {
  const { handleSubmit, control } = useForm<Form>();
  const { errors } = useFormState({
    control,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [customerData, setCustomerData] = useState<Customer | null>(null);
  const [registerError, setRegisterError] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [defaultShipping, setDefaulShipping] = useState(false);
  const [defaultBilling, setDefaultBilling] = useState(false);

  const handleCheckboxClick = (): void => {
    setSameAsShipping(!sameAsShipping);
  };
  const handleDefaultShippingClick = (): void => {
    setDefaulShipping(!defaultShipping);
  };
  const handleDefaultBillingClick = (): void => {
    setDefaultBilling(!defaultBilling);
  };

  const { updateUserData } = useUserDataContext();
  const { updateActiveCart } = useActiveCartContext();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const newCustomerData = getNewCustomerData(data, sameAsShipping, defaultShipping, defaultBilling);

    try {
      await createCustomer(newCustomerData);

      const loginData: CustomerSignin = {
        email: data.email,
        password: data.password,
      };
      const loginResponse = await loginCustomer(loginData);
      localStorage.setItem('token', passwordTokenCache.get().token);

      const { customer } = loginResponse.body;
      let { cart } = loginResponse.body;
      if (!cart) {
        cart = (await createCart()).body;
      }

      setRegisterError(false);
      setCustomerData(customer);

      setTimeout(() => {
        updateUserData(customer);
        updateActiveCart(cart);
        return navigate(from, { replace: true });
      }, 1500);
    } catch (error) {
      // console.log(error);
      setCustomerData(null);
      setRegisterError(true);
    }
  };

  return (
    <CountryProvider>
      <form className="registration__form form" onSubmit={handleSubmit(onSubmit)}>
        <RegistrationUserInfo control={control} errors={errors} />
        <Typography variant="h5" className="form__title">
          Shipping Address
        </Typography>
        <RegistrationAddress isShipping={true} control={control} errors={errors} />
        <div className="form__checkbox-wrapper">
          <div className="form__checkbox">
            <CheckboxElement onChange={handleDefaultShippingClick} checked={defaultShipping} />
            Set this address as a default shipping address?
          </div>
          <div className="form__checkbox">
            <CheckboxElement onChange={handleCheckboxClick} checked={sameAsShipping} />
            Set this address as a billing address?
          </div>
        </div>
        {!sameAsShipping && (
          <Typography variant="h5" className="form__title">
            Billing Address
          </Typography>
        )}
        {!sameAsShipping && <RegistrationAddress isShipping={false} control={control} errors={errors} />}
        <div className="form__checkbox-wrapper">
          <div className="form__checkbox">
            <CheckboxElement onChange={handleDefaultBillingClick} checked={defaultBilling} />
            Set this address as a default billing address?
          </div>
        </div>
        {customerData && (
          <Alert severity="success" className="form__success-message">
            Welcome, {customerData.firstName}!
          </Alert>
        )}
        {registerError && (
          <Alert severity="error" className="form__error-message">
            User with such email already exists. Try to log in.
          </Alert>
        )}
        <ButtonElement type="submit" title="Register" additionalClassName="form__submit" />
      </form>
    </CountryProvider>
  );
};

export default RegistrationForm;
