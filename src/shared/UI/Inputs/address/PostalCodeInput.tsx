import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import postCodeValidation from '../../../lib/validation/postCodeValidation';

const PostalCodeInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="postalCode"
      rules={postCodeValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Postal/Zip code"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => field.onChange(e)}
          value={field.value || ''}
          error={!!props.errors.postalCode?.message}
          helperText={props.errors.postalCode?.message}
        />
      )}
    />
  );
};

export default PostalCodeInput;
