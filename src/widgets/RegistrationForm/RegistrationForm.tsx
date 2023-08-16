import { useForm, useFormState, SubmitHandler } from 'react-hook-form';

import Typography from '@mui/material/Typography';

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

import './RegistrationForm.scss';

const RegistrationForm = (): JSX.Element => {
  const { handleSubmit, control } = useForm<IForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

  return (
    <form className="registration__form form" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="registartion__address-info">
        <StreetInput variant="outlined" className="form__input form__input_street" control={control} errors={errors} />
        <CityInput variant="outlined" className="form__input form__input_city" control={control} errors={errors} />
        <PostalCodeInput variant="outlined" className="form__input form__input_zip" control={control} errors={errors} />
        <CountryInput
          variant="outlined"
          className="form__input form__input_country"
          control={control}
          errors={errors}
        />
      </div>
      <ButtonAuth title="Register" className="form__submit" />
    </form>
  );
};

export default RegistrationForm;
