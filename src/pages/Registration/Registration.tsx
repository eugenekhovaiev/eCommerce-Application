import { Typography } from '@mui/material';
import RegistrationForm from '../../widgets/RegistrationForm/RegistrationForm';

export const Registration = (): JSX.Element => {
  return (
    <main className="registration">
      <Typography variant="h3" gutterBottom className="registration__title">
        Registration
      </Typography>
      <RegistrationForm />
    </main>
  );
};
