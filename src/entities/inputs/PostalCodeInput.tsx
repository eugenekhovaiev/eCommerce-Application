import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { useCountryContext } from '../../shared/lib/contexts/СountryContext';
import postCodeValidation from '../../shared/lib/validation/postCodeValidation';
import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import { RegistrationAddressProps } from '../../shared/types';

const PostalCodeInput = (props: RegistrationAddressProps): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');
  const [postalCode, setPostalCode] = useState(props.value || '');
  const { selectedBillingCountry, selectedShippingCountry } = useCountryContext();
  const selectedCountry = props.isShipping ? selectedShippingCountry : selectedBillingCountry;

  useEffect(() => {
    const isValidValue = postCodeValidation(postalCode, selectedCountry) !== true ? false : true;
    const messageValue =
      postCodeValidation(postalCode, selectedCountry) !== true
        ? postCodeValidation(postalCode, selectedCountry).toString()
        : '';
    setIsValid(isValidValue);
    setMessage(messageValue);
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

  const name = props.default ? 'postalCode' : props.isShipping ? 'postalCodeShipping' : 'postalCodeBilling';

  return (
    <Controller
      control={props.control}
      name={name}
      rules={{
        required: 'Required',
        validate: (value: string): string | boolean => {
          return postCodeValidation(value, selectedCountry);
        },
      }}
      defaultValue={props.value}
      render={({ field }): JSX.Element => (
        <TextFieldElement
          label="Postal/Zip code"
          additionalClassName={props.className}
          variant={props.variant || 'standard'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={postalCode}
          error={!!props.errors.postalCodeBilling?.message || !isValid}
          helperText={!isValid ? message : props.errors.postalCodeBilling?.message}
        />
      )}
    />
  );
};

export default PostalCodeInput;
