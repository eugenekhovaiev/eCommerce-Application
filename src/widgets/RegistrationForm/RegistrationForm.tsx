import { useForm, useFormState } from 'react-hook-form';

import { IForm } from '../../shared/types';

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

const RegistrationForm = (): JSX.Element => {
  const { control } = useForm<IForm>();
  const { errors } = useFormState({
    control,
  });

  return (
    <form className="registration__form form">
      <EmailInput control={control} errors={errors} />
      <PasswordInput control={control} errors={errors} />
      <FirstNameInput />
      <LastNameInput />
      <DateOfBirthInput />
      <div>Address</div>
      <StreetInput />
      <CityInput />
      <PostalCodeInput />
      <CountryInput />
      <ButtonAuth title="Register" />
    </form>
  );
};

export default RegistrationForm;
