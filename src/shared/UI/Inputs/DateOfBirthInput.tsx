import { IInputProps } from '../../types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers';

const DateOfBirthInput = (props: IInputProps): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DatePicker className={props.className} /> */}
      <DateField color="secondary" className={props.className} />
      {/* <DateCalendar className={props.className} /> */}
    </LocalizationProvider>
  );
};

export default DateOfBirthInput;
