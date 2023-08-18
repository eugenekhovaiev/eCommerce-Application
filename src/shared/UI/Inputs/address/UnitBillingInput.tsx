import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import unitValidation from '../../../lib/validation/unitValidation';

const UnitBillingInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="unitBilling"
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
          error={!!props.errors.unitBilling?.message}
          helperText={props.errors.unitBilling?.message}
        />
      )}
    />
  );
};

export default UnitBillingInput;
