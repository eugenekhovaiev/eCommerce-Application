import React from 'react';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { passwordValidation } from '../../lib/validation/passwordValidation';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ISignInForm } from '../../../widgets/AuthForm/LoginForm/login-form';

export const PasswordInput: React.FC = () => {
  const { control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Controller
      control={control}
      name="password"
      rules={passwordValidation}
      render={({ field }) => (
        <FormControl variant="standard" error={!!errors.password?.message}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => field.onChange(e)}
            value={field.value || ''}
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
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
