import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import countryValidation from '../../../lib/validation/countryValidation';
import { Controller } from 'react-hook-form';
import { IInputProps } from '../../../types';
import { useState } from 'react';
import validateRealTime from '../../../lib/validation/validateRealTime';
import { SelectChangeEvent } from '@mui/material/Select/Select';
import { FormHelperText } from '@mui/material';

import { useCountryContext } from '../../../../entities/RegistrationAddress/UI/countryContext';
import COUNTRY_CODE from './consts/COUNTRY_CODE';

const CountryInput = (props: IInputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');
  const { setSelectedBillingCountry, setSelectedShippingCountry } = useCountryContext();
  const setSelectedCountry = props.isShipping ? setSelectedShippingCountry : setSelectedBillingCountry;

  const handleValueChange = (e: SelectChangeEvent<string>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, countryValidation.validate).isValid;
    const messageValue = validateRealTime(value, countryValidation.validate).message;
    setIsValid(isValidValue);
    setMessage(messageValue);

    setSelectedCountry(value);
  };

  return (
    <Controller
      control={props.control}
      name={props.isShipping ? 'countryShipping' : 'countryBilling'}
      rules={countryValidation}
      render={({ field }): JSX.Element => (
        <FormControl
          className={props.className}
          color="secondary"
          error={!!props.errors.countryBilling?.message || !isValid}
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
            {Object.entries(COUNTRY_CODE).map((item) => (
              <MenuItem key={item[0]} color="secondary" value={item[0]}>
                {item[1]}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{!isValid ? message : props.errors.countryBilling?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default CountryInput;