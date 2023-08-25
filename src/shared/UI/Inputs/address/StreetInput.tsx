import { TextField } from '@mui/material';
import { InputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import streetValidation from '../../../lib/validation/streetValidation';
import { useState } from 'react';
import validateRealTime from '../../../lib/validation/validateRealTime';

const StreetInput = (props: InputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, streetValidation.validate).isValid;
    const messageValue = validateRealTime(value, streetValidation.validate).message;
    setIsValid(isValidValue);
    setMessage(messageValue);
  };
  return (
    <Controller
      control={props.control}
      name={props.isShipping ? 'streetShipping' : 'streetBilling'}
      rules={streetValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Street"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={field.value || ''}
          error={!!props.errors.streetBilling?.message || !isValid}
          helperText={!isValid ? message : props.errors.streetBilling?.message}
        />
      )}
    />
  );
};

export default StreetInput;
