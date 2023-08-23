import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import postCodeValidation from '../../../lib/validation/postCodeValidation';
import { useState, useEffect } from 'react';

import { useCountryContext } from '../../../../entities/RegistrationAddress/UI/countryContext';

const PostalCodeBillingInput = (props: IInputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const { selectedBillingCountry } = useCountryContext();

  useEffect(() => {
    setMessage('New country selected.');
    setPostalCode('');
  }, [selectedBillingCountry]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;

    setPostalCode(value);
    const isValidValue = postCodeValidation(value, selectedBillingCountry) !== true ? false : true;
    const messageValue =
      postCodeValidation(value, selectedBillingCountry) !== true
        ? postCodeValidation(value, selectedBillingCountry).toString()
        : '';
    setIsValid(isValidValue);
    setMessage(messageValue);
  };

  return (
    <Controller
      control={props.control}
      name="postalCodeBilling"
      rules={{
        required: 'Required',
        validate: (value: string): string | boolean => {
          return postCodeValidation(value, selectedBillingCountry);
        },
      }}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Postal/Zip code"
          color="secondary"
          className={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          // value={field.value || ''}
          value={postalCode}
          error={!!props.errors.postalCodeBilling?.message || !isValid}
          helperText={!isValid ? message : props.errors.postalCodeBilling?.message}
        />
      )}
    />
  );
};

export default PostalCodeBillingInput;
