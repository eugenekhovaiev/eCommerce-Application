import { TextField } from '@mui/material';
import { IInputProps } from '../../types';
import { Controller } from 'react-hook-form';
import nameValidation from '../../lib/validation/nameValidation';
import { useState } from 'react';
import validateRealTime from '../../lib/validation/validateRealTime';

const LastNameInput = (props: IInputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, nameValidation.validate).isValid;
    const messageValue = validateRealTime(value, nameValidation.validate).message;
    setIsValid(isValidValue);
    setMessage(messageValue);
  };

  return (
    <Controller
      control={props.control}
      name="lastName"
      rules={nameValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Last Name"
          className={props.className}
          color="secondary"
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={field.value || ''}
          error={!!props.errors.lastName?.message || !isValid}
          helperText={!isValid ? message : props.errors.lastName?.message}
        />
      )}
    />
  );
};

export default LastNameInput;