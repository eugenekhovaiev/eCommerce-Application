import { Typography } from '@mui/material';

interface ProfileSectionProps {
  title: string;
  content: string;
}

const ProfileRow: React.FC<ProfileSectionProps> = ({ title, content }) => (
  <div className="profile__row row">
    <Typography className="row__title" variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography className="row__subtitle" variant="body1" gutterBottom>
      {content.split('-').reverse().join('-')}
    </Typography>
  </div>
);

export default ProfileRow;
