import { Card, CardContent, Typography, Button } from '@mui/material';

const Profile = (): JSX.Element => {
  return (
    <section className="profile">
      <div className="container profile__container">
        <h2 className="profile__title">Information</h2>
        <Card>
          <CardContent>
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
            <Button variant="contained">Edit Profile</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
