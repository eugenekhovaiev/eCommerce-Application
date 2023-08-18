import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import buildingValidation from '../../../lib/validation/buildingValidation';

const BuildingShippingInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="buildingShipping"
      rules={buildingValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Building"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => field.onChange(e)}
          value={field.value || ''}
          error={!!props.errors.buildingShipping?.message}
          helperText={props.errors.buildingShipping?.message}
        />
      )}
    />
  );
};

export default BuildingShippingInput;
