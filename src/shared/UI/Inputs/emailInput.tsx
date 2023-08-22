import React from 'react';
import { IInputProps } from '../../types';
import TextField from '@mui/material/TextField';
import emailValidation from '../../lib/validation/emailValidation';
import { Controller } from 'react-hook-form';

const EmailInput: React.FC<IInputProps> = (props): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="email"
      rules={emailValidation}
      render={({ field }): JSX.Element => (
        <TextField
          id="standard-email"
          label="Email"
          type="text"
          variant={props.variant || 'standard'}
          color="secondary"
          className={props.className}
          onChange={(e): void => field.onChange(e)}
          value={field.value || ''}
          error={!!props.errors.email?.message}
          helperText={props.errors.email?.message}
        />
      )}
    />
  );
};

export default EmailInput;
