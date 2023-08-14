import React from 'react';
import Typography from '@mui/material/Typography';
import { useForm, SubmitHandler } from 'react-hook-form';
import '../LoginForm/login-form.css';
import ButtonAuth from '../../../shared/UI/Buttons/buttonAuth';
import { EmailInput } from '../../../shared/UI/Inputs/emailInput';
import { PasswordInput } from '../../../shared/UI/Inputs/passwordInput';
export interface ISignInForm {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { handleSubmit } = useForm<ISignInForm>();

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <div className="login-form">
      <Typography variant="h3" gutterBottom className="login-form__title">
        Login
      </Typography>
      <form className="login-form__fields" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput/>
        <PasswordInput/>
        <ButtonAuth title="LOG IN"/>
      </form>
    </div>
  );
};