import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import unitValidation from '../../../lib/validation/unitValidation';

const UnitShippingInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="unitShipping"
      rules={unitValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Unit"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => field.onChange(e)}
          value={field.value || ''}
          error={!!props.errors.unitShipping?.message}
          helperText={props.errors.unitShipping?.message}
        />
      )}
    />
  );
};

export default UnitShippingInput;
