import { TextField } from '@mui/material';
import { InputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import cityValidation from '../../../lib/validation/cityValidation';
import { useState } from 'react';
import validateRealTime from '../../../lib/validation/validateRealTime';

const CityInput = (props: InputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, cityValidation.validate).isValid;
    const messageValue = validateRealTime(value, cityValidation.validate).message;
    setIsValid(isValidValue);
    setMessage(messageValue);
  };

  return (
    <Controller
      control={props.control}
      name={props.isShipping ? 'cityShipping' : 'cityBilling'}
      rules={cityValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="City"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={field.value || ''}
          error={!!props.errors.cityBilling?.message || !isValid}
          helperText={!isValid ? message : props.errors.cityBilling?.message}
        />
      )}
    />
  );
};

export default CityInput;
