import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import buildingValidation from '../../../lib/validation/buildingValidation';
import { useState } from 'react';
import validateRealTime from '../../../lib/validation/validateRealTime';

const BuildingShippingInput = (props: IInputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, buildingValidation.validate).isValid;
    const messageValue = validateRealTime(value, buildingValidation.validate).message;
    setIsValid(isValidValue);
    setMessage(messageValue);
  };
  return (
    <Controller
      control={props.control}
      name="buildingShipping"
      rules={buildingValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Building"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={field.value || ''}
          error={!!props.errors.buildingShipping?.message || !isValid}
          helperText={!isValid ? message : props.errors.buildingShipping?.message}
        />
      )}
    />
  );
};

export default BuildingShippingInput;
