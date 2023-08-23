import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import postCodeValidation from '../../../lib/validation/postCodeValidation';
import { useEffect, useState } from 'react';

import { useCountryContext } from '../../../../entities/RegistrationAddress/UI/countryContext';

const PostalCodeShippingInput = (props: IInputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const { selectedShippingCountry } = useCountryContext();

  useEffect(() => {
    setMessage('New country selected.');
    setPostalCode('');
  }, [selectedShippingCountry]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;

    setPostalCode(value);
    const isValidValue = postCodeValidation(value, selectedShippingCountry) !== true ? false : true;
    const messageValue =
      postCodeValidation(value, selectedShippingCountry) !== true
        ? postCodeValidation(value, selectedShippingCountry).toString()
        : '';
    setIsValid(isValidValue);
    setMessage(messageValue);
  };

  return (
    <Controller
      control={props.control}
      name="postalCodeShipping"
      rules={{
        required: 'Required',
        validate: (value: string): string | boolean => {
          return postCodeValidation(value, selectedShippingCountry);
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
          error={!!props.errors.postalCodeShipping?.message || !isValid}
          helperText={!isValid ? message : props.errors.postalCodeShipping?.message}
        />
      )}
    />
  );
};

export default PostalCodeShippingInput;
