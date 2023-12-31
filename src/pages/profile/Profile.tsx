// import { useState } from 'react';
// import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
// import { AccountCircle } from '@mui/icons-material';
import ProfileRow from '../../entities/profile/ProfileRow';
import DataEditModal from '../../widgets/profile/DataEditModal';
import { useUserDataContext } from '../../shared/lib/contexts/UserDataContext';
import formatDate from '../../shared/lib/helpers/formatDate';
import PasswordChangeModal from '../../widgets/profile/PasswordChangeModal';
import AddressAddModal from '../../widgets/profile/AddressAddModal';
import AddressRow from '../../entities/profile/AddressRow';

const Profile = (): JSX.Element => {
  const { userData } = useUserDataContext();

  return (
    <main className="profile">
      <div className="container profile__container">
        <Typography variant="h3" gutterBottom className="profile__title">
          Information
        </Typography>
        <Card className="profile__card">
          <CardContent className="profile__card-content">
            {userData?.firstName && <ProfileRow title="First name" content={userData.firstName} />}
            <hr />
            {userData?.lastName && <ProfileRow title="Last name" content={userData.lastName} />}
            <hr />
            {userData?.dateOfBirth && (
              <ProfileRow title="Date of birth" content={formatDate(userData.dateOfBirth, 'DD-MM-YYYY')} />
            )}
            <hr />
            {userData && <ProfileRow title="Email" content={userData.email} />}
            <hr />
            <div className="profile__buttons">
              <DataEditModal />
              <PasswordChangeModal />
            </div>
          </CardContent>
        </Card>
        <section className="profile__addresses addresses">
          <Typography className="addresses__title" variant="h5" gutterBottom>
            Addresses
          </Typography>
          <div className="addresses__content">
            {(userData?.addresses && (
              <div className="addresses__item">
                {userData.addresses.map((address, index) => {
                  return <AddressRow id={address.id as string} key={index} />;
                })}
              </div>
            )) ||
              'No addresses in your profile'}
          </div>
          <AddressAddModal />
        </section>
      </div>
    </main>
  );
};

export default Profile;
