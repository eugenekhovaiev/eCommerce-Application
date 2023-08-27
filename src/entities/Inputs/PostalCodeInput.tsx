import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { useCountryContext } from '../RegistrationFormComponents/UI/countryContext';
import postCodeValidation from '../../shared/lib/validation/postCodeValidation';
import TextFieldElement from '../../shared/UI/TextFieldElement/TextFieldElement';
import { InputProps } from '../../shared/types';

const PostalCodeInput = (props: InputProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const { selectedBillingCountry, selectedShippingCountry } = useCountryContext();
  const selectedCountry = props.isShipping ? selectedShippingCountry : selectedBillingCountry;

  useEffect(() => {
    setMessage('New country selected.');
    setPostalCode('');
  }, [selectedCountry]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;

    setPostalCode(value);
    const isValidValue = postCodeValidation(value, selectedCountry) !== true ? false : true;
    const messageValue =
      postCodeValidation(value, selectedCountry) !== true ? postCodeValidation(value, selectedCountry).toString() : '';
    setIsValid(isValidValue);
    setMessage(messageValue);
  };

  return (
    <Controller
      control={props.control}
      name={props.isShipping ? 'postalCodeShipping' : 'postalCodeBilling'}
      rules={{
        required: 'Required',
        validate: (value: string): string | boolean => {
          return postCodeValidation(value, selectedCountry);
        },
      }}
      render={({ field }): JSX.Element => (
        <TextFieldElement
          label="Postal/Zip code"
          additionalClassName={props.className}
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

export default PostalCodeInput;
