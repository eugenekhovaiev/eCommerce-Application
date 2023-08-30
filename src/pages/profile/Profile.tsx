import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import ProfileSection from '../../entities/profileSection/ProfileSection';

const Profile = (): JSX.Element => {
  const userData = JSON.parse(localStorage.getItem('currentUser')!);
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
            <ProfileSection title="Full name" content={userData.firstName + ' ' + userData.lastName} />
            <hr />
            <ProfileSection title="Date of birth" content={userData.dateOfBirth} />
            <hr />
            <ProfileSection title="Email" content={userData.email} />
            <hr />
            <ProfileSection
              title="Shipping Address"
              content={
                userData.addresses[0].country +
                ', ' +
                userData.addresses[0].city +
                ', ' +
                userData.addresses[0].streetName +
                ', ' +
                userData.addresses[0].building +
                ', ' +
                userData.addresses[0].apartment +
                ', ' +
                userData.addresses[0].postalCode
              }
            />
            <hr />
            <ProfileSection
              title="Billing Address"
              content={
                userData.addresses[1] === undefined
                  ? userData.addresses[0].country +
                    ', ' +
                    userData.addresses[0].city +
                    ', ' +
                    userData.addresses[0].streetName +
                    ', ' +
                    userData.addresses[0].building +
                    ', ' +
                    userData.addresses[0].apartment +
                    ', ' +
                    userData.addresses[0].postalCode
                  : userData.addresses[1].country +
                    ', ' +
                    userData.addresses[1].city +
                    ', ' +
                    userData.addresses[1].streetName +
                    ', ' +
                    userData.addresses[1].building +
                    ', ' +
                    userData.addresses[1].apartment +
                    ', ' +
                    userData.addresses[1].postalCode
              }
            />
            <ButtonElement title="Edit Profile" additionalClassName="form__submit profile__edit" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
