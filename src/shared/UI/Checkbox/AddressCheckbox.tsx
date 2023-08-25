import { Checkbox } from '@mui/material';
import { CheckboxProps } from '../../types';
import { Controller } from 'react-hook-form';

const AddressCheckbox = (props: CheckboxProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="defaultAddress"
      render={(): JSX.Element => (
        <Checkbox className={props.className} color="secondary" onChange={props.onChange} checked={props.checked} />
      )}
    />
  );
};

export default AddressCheckbox;
