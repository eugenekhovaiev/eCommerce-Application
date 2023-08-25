import { Typography } from '@mui/material';

import RegistrationForm from '../../widgets/RegistrationForm/RegistrationForm';
import LinkElement from '../../shared/UI/LinkElement/LinkElement';

import './Registration.scss';

const Registration = (): JSX.Element => {
  return (
    <main className="registration">
      <div className="container registration__wrapper">
        <Typography variant="h3" gutterBottom className="registration__title">
          Registration
        </Typography>
        <LinkElement additionalClassName="registration__link" title="Already have an account? Log in" to="/login" />
        <RegistrationForm />
      </div>
    </main>
  );
};

export default Registration;
