import React from 'react';
import TextField from '@mui/material/TextField';
import { emailValidation } from '../../lib/validation/emailValidation';
import { ISignInForm } from '../../../widgets/AuthForm/LoginForm/login-form';
import { useForm, useFormState, Controller } from 'react-hook-form';

export const EmailInput: React.FC = () => {
  const { control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  return (
    <Controller
      control={control}
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
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />
      )}
    />
  );
};
