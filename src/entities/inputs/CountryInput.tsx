import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { SelectChangeEvent } from '@mui/material/Select/Select';
import { useCountryContext } from '../../shared/lib/contexts/СountryContext';
import countryValidation from '../../shared/lib/validation/countryValidation';
import validateRealTime from '../../shared/lib/validation/validateRealTime';
import SelectElement from '../../shared/UI/selectElement/SelectElement';
import { RegistrationAddressProps } from '../../shared/types';

import COUNTRY_CODE from '../../shared/consts/COUNTRY_CODE';

const CountryInput = (props: RegistrationAddressProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');
  const { selectedBillingCountry, selectedShippingCountry, setSelectedBillingCountry, setSelectedShippingCountry } =
    useCountryContext();

  const selectedCountry = props.isShipping ? selectedShippingCountry : selectedBillingCountry;
  const setSelectedCountry = props.isShipping ? setSelectedShippingCountry : setSelectedBillingCountry;

  useEffect(() => {
    setSelectedCountry(selectedCountry || props.defaultValue || '');
  }, [selectedCountry]);

  const handleValueChange = (e: SelectChangeEvent<string>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, countryValidation.validate).isValid;
    const messageValue = validateRealTime(value, countryValidation.validate).message;
    setIsValid(isValidValue);
    setMessage(messageValue);

    setSelectedCountry(value);
  };

  const name = props.default ? 'country' : props.isShipping ? 'countryShipping' : 'countryBilling';

  return (
    <Controller
      control={props.control}
      name={name}
      rules={countryValidation}
      defaultValue={props.defaultValue}
      render={({ field }): JSX.Element => (
        <SelectElement
          label={'Country'}
          selectItems={COUNTRY_CODE}
          additionalClassName={props.className}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          defaultValue={props.defaultValue}
          error={!!props.errors.countryBilling?.message || !isValid}
          helperText={!isValid ? message : props.errors.countryBilling?.message}
        />
      )}
    />
  );
};

export default CountryInput;
