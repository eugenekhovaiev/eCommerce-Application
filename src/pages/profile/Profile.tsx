// import { useState } from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
// import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import ProfileSection from '../../entities/profileSection/ProfileSection';
import ProfileModal from '../../widgets/userProfile-modal/profileModal';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import getAddressString from '../../shared/lib/helpers/getAddressString';

const Profile = (): JSX.Element => {
  const { userData } = useUserDataContext();

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
            {userData && <ProfileSection title="Full name" content={userData.firstName + ' ' + userData.lastName} />}
            <hr />
            {userData?.dateOfBirth && <ProfileSection title="Date of birth" content={userData.dateOfBirth} />}
            <hr />
            {userData && <ProfileSection title="Email" content={userData.email} />}
            <hr />
            {userData?.addresses && (
              <ProfileSection title="Shipping Address" content={getAddressString(userData.addresses[0])} />
            )}
            {userData?.defaultShippingAddressId && <p>(default)</p>}
            <hr />
            {userData?.addresses && (
              <ProfileSection
                title="Billing Address"
                content={
                  userData.addresses.length === 1
                    ? getAddressString(userData.addresses[0])
                    : getAddressString(userData.addresses[1])
                }
              />
            )}
            {userData?.defaultBillingAddressId && <p>(default)</p>}
            <ProfileModal />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
