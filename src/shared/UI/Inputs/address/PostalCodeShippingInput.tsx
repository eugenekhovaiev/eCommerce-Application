import { TextField } from '@mui/material';
import { IInputProps } from '../../../types';
import { Controller } from 'react-hook-form';
import postCodeValidation from '../../../lib/validation/postCodeValidation';
import { useState } from 'react';

const PostalCodeShippingInput = (props: IInputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;
    const isValidValue = postCodeValidation(value, props.selected) !== true ? false : true;
    const messageValue =
      postCodeValidation(value, props.selected) !== true ? postCodeValidation(value, props.selected).toString() : '';
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
          return postCodeValidation(value, props.selected);
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
          value={field.value || ''}
          error={!!props.errors.postalCodeShipping?.message || !isValid}
          helperText={!isValid ? message : props.errors.postalCodeShipping?.message}
        />
      )}
    />
  );
};

export default PostalCodeShippingInput;
