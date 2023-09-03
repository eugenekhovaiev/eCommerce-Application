import { useState } from 'react';
import { Controller } from 'react-hook-form';
import dateOfBirthValidtion from '../../shared/lib/validation/dateValidation';
import validateRealTime from '../../shared/lib/validation/validateRealTime';
import DateFieldElement from '../../shared/UI/dateFieldElement/DateFieldElement';
import { InputProps } from '../../shared/types';
import { Dayjs } from 'dayjs';

const DateOfBirthInput = (props: InputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleValueChange = (e: Dayjs | string | null): void => {
    if (e !== null) {
      const isValidValue = validateRealTime(e.toString(), dateOfBirthValidtion.validate).isValid;
      const messageValue = validateRealTime(e.toString(), dateOfBirthValidtion.validate).message;
      setIsValid(isValidValue);
      setMessage(messageValue);
    }
  };

  return (
    <Controller
      control={props.control}
      name="dateOfBirth"
      rules={dateOfBirthValidtion}
      defaultValue={props.defaultValue}
      render={({ field }): JSX.Element => (
        <DateFieldElement
          additionalClassName={props.className}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          defaultValue={props.defaultValue}
          error={!!props.errors.dateOfBirth?.message || !isValid}
          helperText={!isValid ? message : props.errors.dateOfBirth?.message}
        />
      )}
    />
  );
};

export default DateOfBirthInput;
