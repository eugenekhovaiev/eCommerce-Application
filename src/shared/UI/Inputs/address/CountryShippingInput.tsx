import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import { Controller } from 'react-hook-form';
import { IInputProps } from '../../../types';
import countryValidation from '../../../lib/validation/countryValidation';
import { useState } from 'react';
import validateRealTime from '../../../lib/validation/validateRealTime';
import { SelectChangeEvent } from '@mui/material/Select/Select';
import { FormHelperText } from '@mui/material';

import { useCountryContext } from '../../../../entities/RegistrationAddress/UI/countryContext';

const CountryShippingInput = (props: IInputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const { setSelectedShippingCountry } = useCountryContext();

  const handleValueChange = (e: SelectChangeEvent<string>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, countryValidation.validate).isValid;
    const messageValue = validateRealTime(value, countryValidation.validate).message;
    setIsValid(isValidValue);
    setMessage(messageValue);

    setSelectedShippingCountry(value);
  };

  return (
    <Controller
      control={props.control}
      name="countryShipping"
      rules={countryValidation}
      render={({ field }): JSX.Element => (
        <FormControl
          className={props.className}
          color="secondary"
          error={!!props.errors.countryShipping?.message || !isValid}
        >
          <InputLabel color="secondary" id="select-country">
            Country
          </InputLabel>
          <Select
            labelId="select-country"
            color="secondary"
            value={field.value || ''}
            label="Country"
            onChange={(e): void => {
              field.onChange(e);
              handleValueChange(e);
            }}
          >
            <MenuItem color="secondary" value={'UA'}>
              Ukraine
            </MenuItem>
            <MenuItem color="secondary" value={'PL'}>
              Poland
            </MenuItem>
            <MenuItem color="secondary" value={'US'}>
              USA
            </MenuItem>
          </Select>
          <FormHelperText>{!isValid ? message : props.errors.countryShipping?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default CountryShippingInput;
