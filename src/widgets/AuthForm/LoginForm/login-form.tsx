import React from 'react';
import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm, useFormState, Controller, SubmitHandler } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
// import { emailValidation } from '../../../shared/lib/validation/emailValidation';
import { passwordValidation } from '../../../shared/lib/validation/passwordValidation';
import '../LoginForm/login-form.css';
import ButtonAuth from '../../../shared/UI/Buttons/buttonAuth';
import { EmailInput } from '../../../shared/UI/Inputs/emailInput';
export interface ISignInForm {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="login-form">
      <Typography variant="h3" gutterBottom className="login-form__title">
        Login
      </Typography>
      <form className="login-form__fields" onSubmit={handleSubmit(onSubmit)}>
        {/* <Controller
          control={control}
          name="email"
          rules={emailValidation}
          render={({ field }) => (
            <TextField
              id="standard-email"
              label="Email"
              type="email"
              variant="standard"
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          )}
        /> */}
        <EmailInput />
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
        <ButtonAuth title="LOG IN"></ButtonAuth>
      </form>
    </div>
  );
};
