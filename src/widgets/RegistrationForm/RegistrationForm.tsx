import { useForm, useFormState, SubmitHandler } from 'react-hook-form';

import Typography from '@mui/material/Typography';

import { IForm } from '../../shared/types';

import EmailInput from '../../shared/UI/Inputs/emailInput';
import PasswordInput from '../../shared/UI/Inputs/passwordInput';
import FirstNameInput from '../../shared/UI/Inputs/FirstNameInput';
import LastNameInput from '../../shared/UI/Inputs/LastNameInput';
import DateOfBirthInput from '../../shared/UI/Inputs/DateOfBirthInput';
import ButtonAuth from '../../shared/UI/Buttons/buttonAuth';
import AddressCheckbox from '../../shared/UI/Checkbox/AddressCheckbox';
import RegistrationShippingAddress from '../../entities/RegistrationAddress/UI/RegistrationShippingAddress';
import RegistrationBillingAddress from '../../entities/RegistrationAddress/UI/RegistrationBillingAddress';
// import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import dayjs from 'dayjs';

import './RegistrationForm.scss';

const RegistrationForm = (): JSX.Element => {
  const { handleSubmit, control } = useForm<IForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data, dayjs(data.dateOfBirth).toDate());

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
        Shipping Address
      </Typography>
      <RegistrationShippingAddress control={control} errors={errors} />
      <div className="form__checkbox">
        Set this address as a default billing address?
        <AddressCheckbox control={control} errors={errors} />
      </div>
      <Typography variant="h5" className="form__title">
        Billing Address
      </Typography>
      <RegistrationBillingAddress control={control} errors={errors} />
      <ButtonAuth title="Register" className="form__submit" />
    </form>
  );
};

export default RegistrationForm;
