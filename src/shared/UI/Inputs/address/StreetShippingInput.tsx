import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import streetValidation from '../../../lib/validation/streetValidation';

const StreetShippingInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="streetShipping"
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
          error={!!props.errors.streetShipping?.message}
          helperText={props.errors.streetShipping?.message}
        />
      )}
    />
  );
};

export default StreetShippingInput;
