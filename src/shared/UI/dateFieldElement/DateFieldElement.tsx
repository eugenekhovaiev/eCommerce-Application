import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers';
import { DateFieldProps } from '../../types';

const DateFieldElement = (props: DateFieldProps): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        format="DD-MM-YYYY"
        color="secondary"
        value={props.value}
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
