import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

import { Customer, CustomerSignin } from '@commercetools/platform-sdk';

import RegistrationAddress from '../../entities/RegistrationFormComponents/RegistrationAddress';
import RegistrationUserInfo from '../../entities/RegistrationFormComponents/RegistrationUserInfo';
import getNewCustomerData from '../../shared/lib/helpers/getNewCustomerData';
import { useLoggedInContext } from '../../shared/lib/contexts/LoggedInContext';
import { CountryProvider } from '../../shared/lib/contexts/countryContext';
import AddressCheckbox from '../../shared/UI/Checkbox/AddressCheckbox';
import ButtonAuth from '../../shared/UI/Buttons/buttonAuth';

import createCustomer from '../../shared/api/user/createCustomer';
import loginCustomer from '../../shared/api/user/loginCustomer';
import { Form } from '../../shared/types';

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

  const { updateLoggedIn } = useLoggedInContext();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const newCustomerData = getNewCustomerData(data, sameAsShipping, defaultShipping, defaultBilling);

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
      localStorage.setItem('isAuth', 'true');
      setTimeout(() => {
        updateLoggedIn(true);
        return navigate(from, { replace: true });
      }, 1500);
    } catch (error) {
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
        <div className="form__checkbox-container">
          <div className="form__checkbox">
            <AddressCheckbox
              onChange={handleDefaultShippingClick}
              checked={defaultShipping}
              control={control}
              errors={errors}
            />
            Set this address as a default shipping address?
          </div>
          <div className="form__checkbox">
            <AddressCheckbox
              onChange={handleCheckboxClick}
              checked={sameAsShipping}
              control={control}
              errors={errors}
            />
            Set this address as a billing address?
          </div>
        </div>
        {!sameAsShipping && (
          <Typography variant="h5" className="form__title">
            Billing Address
          </Typography>
        )}
        {!sameAsShipping && <RegistrationAddress isShipping={false} control={control} errors={errors} />}
        <div className="form__checkbox-container">
          <div className="form__checkbox">
            <AddressCheckbox
              onChange={handleDefaultBillingClick}
              checked={defaultBilling}
              control={control}
              errors={errors}
            />
            Set this address as a default billing address?
          </div>
        </div>
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
        <ButtonAuth title="Register" className="form__submit" />
      </form>
    </CountryProvider>
  );
};

export default RegistrationForm;
