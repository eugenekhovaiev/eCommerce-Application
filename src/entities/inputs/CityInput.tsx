import { useState } from 'react';
import { Controller } from 'react-hook-form';
import cityValidation from '../../shared/lib/validation/cityValidation';
import validateRealTime from '../../shared/lib/validation/validateRealTime';
import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import { RegistrationAddressProps } from '../../shared/types';

const CityInput = (props: RegistrationAddressProps): JSX.Element => {
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
      defaultValue={props.defaultValue}
      render={({ field }): JSX.Element => (
        <TextFieldElement
          label="City"
          additionalClassName={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          defaultValue={props.defaultValue}
          error={!!props.errors.cityBilling?.message || !isValid}
          helperText={!isValid ? message : props.errors.cityBilling?.message}
        />
      )}
    />
  );
};

export default CityInput;
