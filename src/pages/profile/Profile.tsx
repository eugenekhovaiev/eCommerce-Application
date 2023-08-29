import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';

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
            <div className="profile__row">
              <Typography variant="h6" gutterBottom>
                Full name
              </Typography>
              <Typography variant="body1" gutterBottom>
                First name Last name
              </Typography>
            </div>
            <hr />
            <div className="profile__row">
              <Typography variant="h6" gutterBottom>
                Date of birth
              </Typography>
              <Typography variant="body1" gutterBottom>
                12.12.2008
              </Typography>
            </div>
            <hr />
            <div className="profile__row">
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Typography variant="body1" gutterBottom>
                user@user.com
              </Typography>
            </div>
            <hr />
            <div className="profile__row">
              <Typography variant="h6" gutterBottom>
                Shipping Address
              </Typography>
              <Typography variant="body1" gutterBottom>
                USA
              </Typography>
            </div>
            <hr />
            <div className="profile__row">
              <Typography variant="h6" gutterBottom>
                Billing Address
              </Typography>
              <Typography variant="body1" gutterBottom>
                Poland
              </Typography>
            </div>
            <ButtonElement type="submit" title="Edit Profile" additionalClassName="form__submit profile__edit" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
