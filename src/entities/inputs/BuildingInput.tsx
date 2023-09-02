import { useState } from 'react';
import { Controller } from 'react-hook-form';
import buildingValidation from '../../shared/lib/validation/buildingValidation';
import validateRealTime from '../../shared/lib/validation/validateRealTime';
import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import { RegistrationAddressProps } from '../../shared/types';

const BuildingInput = (props: RegistrationAddressProps): JSX.Element => {
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
      name={props.isShipping ? 'buildingShipping' : 'buildingBilling'}
      rules={buildingValidation}
      defaultValue={props.defaultValue}
      render={({ field }): JSX.Element => (
        <TextFieldElement
          label="Building"
          additionalClassName={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          defaultValue={props.defaultValue}
          error={!!props.errors.buildingBilling?.message || !isValid}
          helperText={!isValid ? message : props.errors.buildingBilling?.message}
        />
      )}
    />
  );
};

export default BuildingInput;
