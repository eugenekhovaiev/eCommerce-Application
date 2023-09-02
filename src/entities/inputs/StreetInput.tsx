import { useState } from 'react';
import { Controller } from 'react-hook-form';
import streetValidation from '../../shared/lib/validation/streetValidation';
import validateRealTime from '../../shared/lib/validation/validateRealTime';
import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import { RegistrationAddressProps } from '../../shared/types';

const StreetInput = (props: RegistrationAddressProps): JSX.Element => {
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
      defaultValue={props.defaultValue}
      render={({ field }): JSX.Element => (
        <TextFieldElement
          label="Street"
          additionalClassName={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          defaultValue={props.defaultValue}
          error={!!props.errors.streetBilling?.message || !isValid}
          helperText={!isValid ? message : props.errors.streetBilling?.message}
        />
      )}
    />
  );
};

export default StreetInput;
