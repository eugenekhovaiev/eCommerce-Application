import { InputProps } from '../../shared/types';
import { Controller } from 'react-hook-form';
import unitValidation from '../../shared/lib/validation/unitValidation';
import { useState } from 'react';
import validateRealTime from '../../shared/lib/validation/validateRealTime';
import TextFieldElement from '../../shared/UI/TextFieldElement/TextFieldElement';

const UnitInput = (props: InputProps): JSX.Element => {
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
      name={props.isShipping ? 'unitShipping' : 'unitBilling'}
      rules={unitValidation}
      render={({ field }): JSX.Element => (
        <TextFieldElement
          label="Unit"
          additionalClassName={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={field.value || ''}
          error={!!props.errors.unitBilling?.message || !isValid}
          helperText={!isValid ? message : props.errors.unitBilling?.message}
        />
      )}
    />
  );
};

export default UnitInput;
