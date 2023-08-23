import React from 'react';
import { IInputProps } from '../../types';
import TextField from '@mui/material/TextField';
import emailValidation from '../../lib/validation/emailValidation';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import validateRealTime from '../../lib/validation/validateRealTime';

const EmailInput: React.FC<IInputProps> = (props): JSX.Element => {
  const [isValid, setIsValidEmail] = useState(true);
  const [message, setEmailMessage] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, emailValidation.validate).isValid;
    const messageValue = validateRealTime(value, emailValidation.validate).message;
    setIsValidEmail(isValidValue);
    setEmailMessage(messageValue);
  };

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
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={field.value || ''}
          error={!!props.errors.email?.message || !isValid}
          helperText={!isValid ? message : props.errors.email?.message}
        />
      )}
    />
  );
};

export default EmailInput;
