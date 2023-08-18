import { Checkbox } from '@mui/material';
import { IInputProps } from '../../types';
import { Controller } from 'react-hook-form';

const AddressCheckbox = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="defaultAddress"
      render={({ field }): JSX.Element => (
        <Checkbox
          className={props.className}
          color="secondary"
          onChange={(e): void => field.onChange(e)}
          value={field.value || false}
        />
      )}
    />
  );
};

export default AddressCheckbox;
