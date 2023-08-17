import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import streetValidation from '../../../lib/validation/streetValidation';

const StreetBillingInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="streetBilling"
      rules={streetValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Street Address"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => field.onChange(e)}
          value={field.value || ''}
          error={!!props.errors.streetBilling?.message}
          helperText={props.errors.streetBilling?.message}
        />
      )}
    />
  );
};

export default StreetBillingInput;
