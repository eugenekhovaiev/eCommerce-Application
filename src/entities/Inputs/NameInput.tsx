import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { InputProps } from '../../shared/types';
import nameValidation from '../../shared/lib/validation/nameValidation';
import validateRealTime from '../../shared/lib/validation/validateRealTime';
import TextFieldElement from '../../shared/UI/TextFieldElement/TextFieldElement';

const NameInput = (props: InputProps): JSX.Element => {
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
      name={props.isFirstName ? 'firstName' : 'lastName'}
      rules={nameValidation}
      render={({ field }): JSX.Element => (
        <TextFieldElement
          label={props.isFirstName ? 'First Name' : 'Last Name'}
          additionalClassName={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={field.value || ''}
          error={!!props.errors.firstName?.message || !isValid}
          helperText={!isValid ? message : props.errors.firstName?.message}
        />
      )}
    />
  );
};

export default NameInput;
