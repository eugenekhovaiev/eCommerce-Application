import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import { Controller } from 'react-hook-form';
import { IInputProps } from '../../../types';

const CountryInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="country"
      render={({ field }): JSX.Element => (
        <FormControl className={props.className} color="secondary">
          <InputLabel color="secondary" id="select-country">
            Country
          </InputLabel>
          <Select
            labelId="select-country"
            color="secondary"
            value={field.value || ''}
            label="Country"
            required
            onChange={(e): void => field.onChange(e)}
          >
            <MenuItem color="secondary" value={'Ukraine'}>
              Ukraine
            </MenuItem>
            <MenuItem color="secondary" value={'Poland'}>
              Poland
            </MenuItem>
            <MenuItem color="secondary" value={'USA'}>
              USA
            </MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
};

export default CountryInput;
