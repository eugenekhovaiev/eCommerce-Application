import { Control, FieldErrors } from 'react-hook-form';

export interface ISignInForm {
  email: string;
  password: string;
}

export interface IButtonProps {
  title: string;
}

export interface IEmailInputProps {
  control: Control<ISignInForm>;
  errors: FieldErrors<ISignInForm>;
}

export interface IPasswordInputProps {
  control: Control<ISignInForm>;
  errors: FieldErrors<ISignInForm>;
}
