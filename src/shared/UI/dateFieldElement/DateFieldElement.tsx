import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers';
import { DateFieldProps } from '../../types';
import dayjs from 'dayjs';

const DateFieldElement = (props: DateFieldProps): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        format="DD-MM-YYYY"
        color="secondary"
        defaultValue={props.defaultValue ? dayjs(props.defaultValue) : ''}
        className={props.additionalClassName}
        onChange={props.onChange}
        slotProps={{
          textField: {
            error: props.error,
            helperText: props.helperText,
          },
        }}
        helperText={props.helperText}
      />
    </LocalizationProvider>
  );
};

export default DateFieldElement;
