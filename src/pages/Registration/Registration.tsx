import { Typography } from '@mui/material';

import RegistrationForm from '../../widgets/RegistrationForm/RegistrationForm';

import './Registration.scss';

export const Registration = (): JSX.Element => {
  return (
    <main className="registration">
      <div className="container registration__wrapper">
        <Typography variant="h3" gutterBottom className="registration__title">
          Registration
        </Typography>
        <RegistrationForm />
      </div>
    </main>
  );
};
