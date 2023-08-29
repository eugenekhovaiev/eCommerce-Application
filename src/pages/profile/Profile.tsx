import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import ProfileSection from '../../entities/profileSection/ProfileSection';

const Profile = (): JSX.Element => {
  return (
    <section className="profile">
      <div className="container profile__container">
        <Typography variant="h3" gutterBottom className="profile__title">
          Information
        </Typography>
        <Card className="profile__card">
          <Avatar sx={{ width: '30vh', height: '30vh', marginBottom: 2 }}>
            <AccountCircle sx={{ width: '100%', height: '100%' }} />
          </Avatar>
          <CardContent className="profile__card-content">
            <ProfileSection title="Full name" content="First name Last name" />
            <hr />
            <ProfileSection title="Date of birth" content="12.12.2008" />
            <hr />
            <ProfileSection title="Email" content="user@user.com" />
            <hr />
            <ProfileSection title="Shipping Address" content="USA" />
            <hr />
            <ProfileSection title="Billing Address" content="Poland" />
            <ButtonElement type="submit" title="Edit Profile" additionalClassName="form__submit profile__edit" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
