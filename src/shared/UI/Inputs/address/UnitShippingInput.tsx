import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import unitValidation from '../../../lib/validation/unitValidation';
import { useState } from 'react';
import validateRealTime from '../../../lib/validation/validateRealTime';

const UnitShippingInput = (props: IInputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, unitValidation.validate).isValid;
    const messageValue = validateRealTime(value, unitValidation.validate).message;
    setIsValid(isValidValue);
    setMessage(messageValue);
  };

  return (
    <Controller
      control={props.control}
      name="unitShipping"
      rules={unitValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Unit"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={field.value || ''}
          error={!!props.errors.unitShipping?.message || !isValid}
          helperText={!isValid ? message : props.errors.unitShipping?.message}
        />
      )}
    />
  );
};

export default UnitShippingInput;
