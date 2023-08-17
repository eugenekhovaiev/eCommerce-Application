import { IInputProps } from '../../types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import dateOfBirthValidtion from '../../lib/validation/dateValidation';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateOfBirthInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="dateOfBirth"
      rules={dateOfBirthValidtion}
      render={({ field }): JSX.Element => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DatePicker className={props.className} /> */}
          <DateField
            format="DD-MM-YYYY"
            color="secondary"
            value={field.value}
            className={props.className}
            onChange={(e): void => field.onChange(e)}
            helperText={props.errors.dateOfBirth?.message}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DateOfBirthInput;
