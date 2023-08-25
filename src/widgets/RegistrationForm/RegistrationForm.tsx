import { useState } from 'react';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

import { IForm } from '../../shared/types';
import { Customer, CustomerSignin } from '@commercetools/platform-sdk';

import EmailInput from '../../shared/UI/Inputs/emailInput';
import PasswordInput from '../../shared/UI/Inputs/passwordInput';
import NameInput from '../../shared/UI/Inputs/NameInput';
import DateOfBirthInput from '../../shared/UI/Inputs/DateOfBirthInput';
import ButtonAuth from '../../shared/UI/Buttons/buttonAuth';
import AddressCheckbox from '../../shared/UI/Checkbox/AddressCheckbox';
import RegistrationAddress from '../../entities/RegistrationAddress/UI/RegistrationAddress';
import getNewCustomerData from '../../shared/lib/helpers/getNewCustomerData';

import createCustomer from '../../shared/api/user/createCustomer';
import loginCustomer from '../../shared/api/user/loginCustomer';

import { useHeaderContext } from '../header/HeaderContext';

import './RegistrationForm.scss';
import { CountryProvider } from '../../entities/RegistrationAddress/UI/countryContext';

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

  const { updateHeader } = useHeaderContext();

  const onSubmit: SubmitHandler<IForm> = async (data) => {
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
        updateHeader(true);
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
        <div className="registration__user-info">
          <NameInput
            variant="outlined"
            className="form__input form__input_name"
            isFirstName={true}
            control={control}
            errors={errors}
          />
          <NameInput
            variant="outlined"
            className="form__input form__input_name"
            isFirstName={false}
            control={control}
            errors={errors}
          />
          <EmailInput variant="outlined" className="form__input form__input_email" control={control} errors={errors} />
          <PasswordInput className="form__input form__input_password" control={control} errors={errors} />
          <DateOfBirthInput className="form__input form__input_dob" control={control} errors={errors} />
        </div>
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
