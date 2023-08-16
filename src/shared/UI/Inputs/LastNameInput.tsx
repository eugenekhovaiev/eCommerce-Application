import { TextField } from '@mui/material';
import { IInputProps } from '../../types';

const LastNameInput = (props: IInputProps): JSX.Element => {
  return (
    <TextField
      type="text"
      label="Last Name"
      className={props.className}
      color="secondary"
      variant={props.variant || 'standard'}
    />
  );
};

export default LastNameInput;
