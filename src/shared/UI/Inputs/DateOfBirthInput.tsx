import { IInputProps } from '../../types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import dateOfBirthValidtion from '../../lib/validation/dateValidation';

const DateOfBirthInput = (props: IInputProps): JSX.Element => {
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
            onChange={(e): void => field.onChange(e)}
            slotProps={{
              textField: {
                error: !!props.errors.dateOfBirth?.message,
                helperText: props.errors.dateOfBirth?.message,
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
