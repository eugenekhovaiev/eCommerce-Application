import React from 'react';
import Typography from '@mui/material/Typography';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import '../LoginForm/login-form.css';
import ButtonAuth from '../../../shared/UI/Buttons/buttonAuth';
import { EmailInput } from '../../../shared/UI/Inputs/emailInput';
import { PasswordInput } from '../../../shared/UI/Inputs/passwordInput';
import { ISignInForm } from '../../../shared/types';

export const LoginForm: React.FC = (): JSX.Element => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });
  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <div className="login-form">
      <Typography variant="h3" gutterBottom className="login-form__title">
        Login
      </Typography>
      <form className="login-form__fields" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput control={control} errors={errors} />
        <PasswordInput control={control} errors={errors} />
        <ButtonAuth title="LOG IN" />
      </form>
    </div>
  );
};
