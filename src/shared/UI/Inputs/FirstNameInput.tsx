import { TextField } from '@mui/material';
import { IInputProps } from '../../types';
import { Controller } from 'react-hook-form';
import nameValidation from '../../lib/validation/nameValidation';
import { useState } from 'react';
import validateRealTime from '../../lib/validation/validateRealTime';

const FirstNameInput = (props: IInputProps): JSX.Element => {
  const [isValidName, setIsValidName] = useState(true);
  const [nameMessage, setNameMessage] = useState('');

  const handleEmailChang = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const email = e.target.value;
    const isValid = validateRealTime(email, nameValidation.validate).isValid;
    const message = validateRealTime(email, nameValidation.validate).message;
    setIsValidName(isValid);
    setNameMessage(message);
  };
  return (
    <Controller
      control={props.control}
      name="firstName"
      rules={nameValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="First Name"
          className={props.className}
          color="secondary"
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleEmailChang(e);
          }}
          value={field.value || ''}
          error={!!props.errors.firstName?.message || !isValidName}
          helperText={!isValidName ? nameMessage : props.errors.firstName?.message}
        />
      )}
    />
  );
};

export default FirstNameInput;
