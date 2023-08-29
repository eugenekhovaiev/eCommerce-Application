import { Typography } from '@mui/material';

const Profile = (): JSX.Element => {
  return (
    <section className="profile">
      <div className="container profile__container">
        <h2 className="profile__title">Information</h2>
        <Typography variant="h6">First name Last name</Typography>
        <Typography>date of birth</Typography>
      </div>
    </section>
  );
};

export default Profile;
