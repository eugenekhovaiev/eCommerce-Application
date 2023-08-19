import { Checkbox } from '@mui/material';
// import { IInputProps } from '../../types';
import { ICheckboxProps } from '../../types';
import { Controller } from 'react-hook-form';

const AddressCheckbox = (props: ICheckboxProps): JSX.Element => {
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
