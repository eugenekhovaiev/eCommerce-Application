import React from 'react';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { RegistrationUserInfoProps } from '../../shared/types';
import emailValidation from '../../shared/lib/validation/emailValidation';
import validateRealTime from '../../shared/lib/validation/validateRealTime';
import TextFieldElement from '../../shared/UI/TextFieldElement/TextFieldElement';

const EmailInput: React.FC<RegistrationUserInfoProps> = (props): JSX.Element => {
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
        <TextFieldElement
          label="Email"
          variant={props.variant || 'standard'}
          additionalClassName={props.className}
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
