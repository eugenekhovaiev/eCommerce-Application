import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import postCodeValidation from '../../../lib/validation/postCodeValidation';

const PostalCodeBillingInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="postalCodeBilling"
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
          error={!!props.errors.postalCodeBilling?.message}
          helperText={props.errors.postalCodeBilling?.message}
        />
      )}
    />
  );
};

export default PostalCodeBillingInput;
