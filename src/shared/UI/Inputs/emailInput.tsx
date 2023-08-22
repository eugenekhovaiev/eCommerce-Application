import React from 'react';
import { IInputProps } from '../../types';
import TextField from '@mui/material/TextField';
import emailValidation from '../../lib/validation/emailValidation';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import validateRealTime from '../../lib/validation/validateRealTime';

const EmailInput: React.FC<IInputProps> = (props): JSX.Element => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailMessage, setEmailMessage] = useState('');

  const handleEmailChang = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const email = e.target.value;
    const isValid = validateRealTime(email, emailValidation.validate).isValid;
    const message = validateRealTime(email, emailValidation.validate).message;
    setIsValidEmail(isValid);
    setEmailMessage(message);
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
            handleEmailChang(e);
          }}
          value={field.value || ''}
          error={!!props.errors.email?.message || !isValidEmail}
          helperText={!isValidEmail ? emailMessage : props.errors.email?.message}
        />
      )}
    />
  );
};

export default EmailInput;
