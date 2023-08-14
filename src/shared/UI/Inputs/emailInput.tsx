import React from 'react';
import TextField from '@mui/material/TextField';
import { emailValidation } from '../../lib/validation/emailValidation';
import { ISignInForm } from '../../../widgets/AuthForm/LoginForm/login-form';
import { Controller, Control, FieldErrors } from 'react-hook-form';

type EmailInputProps = {
  control: Control<ISignInForm>;
  errors: FieldErrors<ISignInForm>;
};

export const EmailInput: React.FC<EmailInputProps>= (props) => {
  return (
    <Controller
      control={props.control}
      name="email"
      rules={emailValidation}
      render={({ field }) => (
        <TextField
          id="standard-email"
          label="Email"
          type="email"
          variant="standard"
          onChange={(e) => field.onChange(e)}
          value={field.value || ''}
          error={!!props.errors.email?.message}
          helperText={props.errors.email?.message}
        />
      )}
    />
  );
};
