import React from 'react';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import validateRealTime from '../../shared/lib/validation/validateRealTime';
import passwordValidation from '../../shared/lib/validation/passwordValidation';
import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import { RegistrationUserInfoProps } from '../../shared/types';

const PasswordInput: React.FC<RegistrationUserInfoProps> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value;
    const isValidValue = validateRealTime(value, passwordValidation.validate).isValid;
    const messageValue = validateRealTime(value, passwordValidation.validate).message;
    setIsValid(isValidValue);
    setMessage(messageValue);
  };
  const handleClickShowPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <Controller
      control={props.control}
      name="password"
      rules={passwordValidation}
      render={({ field }): JSX.Element => (
        <TextFieldElement
          label="Password"
          additionalClassName={props.className}
          variant={props.variant || 'standard'}
          type={showPassword ? 'text' : 'password'}
          onChange={(e): void => {
            field.onChange(e);
            handleValueChange(e);
          }}
          value={field.value || '' || props.value}
          error={!!props.errors.password?.message || !isValid}
          helperText={!isValid ? message : props.errors.password?.message}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      )}
    />
  );
};

export default PasswordInput;
