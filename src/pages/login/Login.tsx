import LoginForm from '../../widgets/login/LoginForm';
import { Typography } from '@mui/material';
import SignUpLink from '../../entities/links/SignUpLink';

const Login = (): JSX.Element => {
  return (
    <main className="login">
      <div className="container login__wrapper">
        <Typography variant="h3" gutterBottom className="login__title">
          Login
        </Typography>
        <Typography variant="subtitle1" className="login__subtitle">
          Do not have an account yet? <SignUpLink additionalClassName="login__link" />
        </Typography>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
