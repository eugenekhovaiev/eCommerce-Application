import React from 'react';
import Typography from '@mui/material/Typography';

export const LoginForm: React.FC = () => {
    return (
        <div className="login-form">
           <Typography variant="h3" gutterBottom className='login-form__title'>
                Login
            </Typography> 
        </div>
    )
}