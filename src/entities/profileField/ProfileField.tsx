import { Typography } from '@mui/material';
import { useState } from 'react';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { Form } from '../../shared/types';
import NameInput from '../inputs/NameInput';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';

const ProfileField = (): JSX.Element => {
  const { userData } = useUserDataContext();
  const [dataChanging, setDataChanging] = useState(false);

  const { handleSubmit, control } = useForm<Form>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<Form> = async (data) => {
    console.log(data);
    // console.log(userData);
    setDataChanging(false);
  };

  const handleClick = (): void => {
    setDataChanging(true);
  };

  return (
    <div className="profile-field">
      <Typography variant="h6" gutterBottom>
        First Name
      </Typography>
      {!dataChanging && <div>{userData?.firstName}</div>}
      {dataChanging && (
        <form className="profile-field__form" onSubmit={handleSubmit(onSubmit)}>
          <NameInput
            variant="outlined"
            className="form__input form__input_name"
            isFirstName={true}
            control={control}
            errors={errors}
            value={userData?.firstName}
          />
          <ButtonElement type="submit" title="Save" additionalClassName="form__submit" />
        </form>
      )}
      {!dataChanging && (
        <ButtonElement type="button" title="Change" additionalClassName="change" onClick={handleClick} />
      )}
    </div>
  );
};

export default ProfileField;
