import { useState } from 'react';
import { Controller } from 'react-hook-form';
import dateOfBirthValidtion from '../../shared/lib/validation/dateValidation';
import validateRealTime from '../../shared/lib/validation/validateRealTime';
import DateFieldElement from '../../shared/UI/DateFieldElement/DateFieldElement';
import { InputProps } from '../../shared/types';

const DateOfBirthInput = (props: InputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleValueChange = (e: string | null): void => {
    if (e !== null) {
      const isValidValue = validateRealTime(e, dateOfBirthValidtion.validate).isValid;
      const messageValue = validateRealTime(e, dateOfBirthValidtion.validate).message;
      setIsValid(isValidValue);
      setMessage(messageValue);
    }
  };

  return (
    <Controller
      control={props.control}
      name="dateOfBirth"
      rules={dateOfBirthValidtion}
      render={({ field }): JSX.Element => (
        <DateFieldElement
          value={field.value}
          additionalClassName={props.className}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          error={!!props.errors.dateOfBirth?.message || !isValid}
          helperText={!isValid ? message : props.errors.dateOfBirth?.message}
        />
      )}
    />
  );
};

export default DateOfBirthInput;
