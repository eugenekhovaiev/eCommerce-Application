import { TextField } from '@mui/material';
import { IInputProps } from '../../types';

const FirstNameInput = (props: IInputProps): JSX.Element => {
  return (
    <TextField
      type="text"
      label="First Name"
      className={props.className}
      color="secondary"
      variant={props.variant || 'standard'}
    />
  );
};

export default FirstNameInput;
