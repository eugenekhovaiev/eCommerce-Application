import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';

const CityInput = (props: IInputProps): JSX.Element => {
  return (
    <TextField
      type="text"
      label="City"
      color="secondary"
      className={props.className}
      variant={props.variant || 'standard'}
    />
  );
};

export default CityInput;
