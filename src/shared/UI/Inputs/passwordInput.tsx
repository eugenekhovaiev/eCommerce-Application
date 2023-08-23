import React from 'react';
import { Controller } from 'react-hook-form';

import passwordValidation from '../../lib/validation/passwordValidation';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import validateRealTime from '../../lib/validation/validateRealTime';

import { IInputProps } from '../../types';

const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
  event.preventDefault();
};

const PasswordInput: React.FC<IInputProps> = (props) => {
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

  const handleClickShowPassword = (): void => setShowPassword((show) => !show);

  return (
    <Controller
      control={props.control}
      name="password"
      rules={passwordValidation}
      render={({ field }): JSX.Element => (
        <FormControl
          className={props.className}
          variant="standard"
          error={!!props.errors.password?.message || !isValid}
        >
          <InputLabel color="secondary" htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e): void => {
              field.onChange(e);
              handleValueChange(e);
            }}
            value={field.value || ''}
            color="secondary"
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
          <FormHelperText>{!isValid ? message : props.errors.password?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default PasswordInput;
