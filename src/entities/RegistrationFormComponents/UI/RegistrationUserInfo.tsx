import { InputProps } from '../../../shared/types';
import NameInput from '../../../shared/UI/Inputs/NameInput';
import EmailInput from '../../../shared/UI/Inputs/emailInput';
import PasswordInput from '../../../shared/UI/Inputs/passwordInput';
import DateOfBirthInput from '../../../shared/UI/Inputs/DateOfBirthInput';

const RegistrationUserInfo = (props: InputProps): JSX.Element => {
  return (
    <div className="registration__user-info">
      <NameInput
        variant="outlined"
        className="form__input form__input_name"
        isFirstName={true}
        control={props.control}
        errors={props.errors}
      />
      <NameInput
        variant="outlined"
        className="form__input form__input_name"
        isFirstName={false}
        control={props.control}
        errors={props.errors}
      />
      <EmailInput
        variant="outlined"
        className="form__input form__input_email"
        control={props.control}
        errors={props.errors}
      />
      <PasswordInput className="form__input form__input_password" control={props.control} errors={props.errors} />
      <DateOfBirthInput className="form__input form__input_dob" control={props.control} errors={props.errors} />
    </div>
  );
};

export default RegistrationUserInfo;
