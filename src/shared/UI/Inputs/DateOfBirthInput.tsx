import { InputProps } from '../../types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import dateOfBirthValidtion from '../../lib/validation/dateValidation';
import { useState } from 'react';
import validateRealTime from '../../lib/validation/validateRealTime';

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField
            format="DD-MM-YYYY"
            color="secondary"
            value={field.value}
            className={props.className}
            onChange={(e): void => {
              field.onChange(e);
              handleValueChange(e);
            }}
            slotProps={{
              textField: {
                error: !!props.errors.dateOfBirth?.message || !isValid,
                helperText: !isValid ? message : props.errors.dateOfBirth?.message,
              },
            }}
            helperText={props.errors.dateOfBirth?.message}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DateOfBirthInput;
