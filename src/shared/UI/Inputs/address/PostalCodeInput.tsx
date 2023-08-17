import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';

const PostalCodeInput = (props: IInputProps): JSX.Element => {
  return (
    <TextField
      type="text"
      label="Postal/Zip code"
      color="secondary"
      className={props.className}
      variant={props.variant || 'standard'}
    />
  );
};

export default PostalCodeInput;
