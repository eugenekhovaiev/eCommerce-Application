import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';

const StreetInput = (props: IInputProps): JSX.Element => {
  return (
    <TextField
      type="text"
      label="Street Address"
      color="secondary"
      className={props.className}
      variant={props.variant || 'standard'}
    />
  );
};

export default StreetInput;
