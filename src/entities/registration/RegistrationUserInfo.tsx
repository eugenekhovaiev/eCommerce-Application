import NameInput from '../inputs/NameInput';
import EmailInput from '../inputs/EmailInput';
import PasswordInput from '../inputs/PasswordInput';
import DateOfBirthInput from '../inputs/DateOfBirthInput';
import { RegistrationUserInfoProps } from '../../shared/types';

const RegistrationUserInfo = (props: RegistrationUserInfoProps): JSX.Element => {
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
      <PasswordInput
        className="form__input form__input_password"
        variant="outlined"
        control={props.control}
        errors={props.errors}
      />
      <DateOfBirthInput className="form__input form__input_dob" control={props.control} errors={props.errors} />
    </div>
  );
};

export default RegistrationUserInfo;