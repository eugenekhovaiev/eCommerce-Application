import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';

const CountryInput = (props: IInputProps): JSX.Element => {
  return (
    <TextField
      type="text"
      label="Country"
      color="secondary"
      className={props.className}
      variant={props.variant || 'standard'}
    />
  );
};

export default CountryInput;
