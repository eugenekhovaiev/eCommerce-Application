import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm, useFormState, Controller } from 'react-hook-form';

export const LoginForm: React.FC = () => {
    const { handleSubmit, control} = useForm();
    const { errors } = useFormState({
        control
    });

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return (
        <div className="login-form">
           <Typography variant="h3" gutterBottom className='login-form__title'>
                Login
            </Typography> 
            <form className='login-form__fields'>
                <Controller
                control={control}
                name="email"
                render={({ field }) => (
                <TextField
                id="standard-email"
                label="Email"
                type="email"
                variant="standard"
                onChange={(e) => field.onChange(e)}
                />
                )}
                />
                
                <Controller
                 control={control}
                 name="password"
                 render={({ field }) => (
                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => field.onChange(e)}
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
                </FormControl>
                 )}
                 />  
                <Button
                type='submit'>
                    LOG IN
                    </Button>
            </form> 
        </div>
    )
}