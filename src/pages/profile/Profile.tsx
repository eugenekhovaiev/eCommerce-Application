// import { useState } from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ProfileRow from '../../entities/profileRow/ProfileRow';
import ProfileDataModal from '../../widgets/profile/ProfileDataModal';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import getAddressString from '../../shared/lib/helpers/getAddressString';
import formatDate from '../../shared/lib/helpers/formatDate';

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
            {userData && <ProfileRow title="Full name" content={userData.firstName + ' ' + userData.lastName} />}
            <hr />
            {userData?.dateOfBirth && (
              <ProfileRow title="Date of birth" content={formatDate(userData.dateOfBirth, 'DD-MM-YYYY')} />
            )}
            <hr />
            {userData && <ProfileRow title="Email" content={userData.email} />}
            <hr />
            {userData?.addresses && (
              <ProfileRow title="Shipping Address" content={getAddressString(userData.addresses[0])} />
            )}
            {userData?.defaultShippingAddressId && <p>(default)</p>}
            <hr />
            {userData?.addresses && (
              <ProfileRow
                title="Billing Address"
                content={
                  userData.addresses.length === 1
                    ? getAddressString(userData.addresses[0])
                    : getAddressString(userData.addresses[1])
                }
              />
            )}
            {userData?.defaultBillingAddressId && <p>(default)</p>}
            <ProfileDataModal />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
