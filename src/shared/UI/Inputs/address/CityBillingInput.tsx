import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import cityValidation from '../../../lib/validation/cityValidation';

const CityBillingInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="cityBilling"
      rules={cityValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="City"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => field.onChange(e)}
          value={field.value || ''}
          error={!!props.errors.cityBilling?.message}
          helperText={props.errors.cityBilling?.message}
        />
      )}
    />
  );
};

export default CityBillingInput;
