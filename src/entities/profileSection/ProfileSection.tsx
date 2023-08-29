import { Typography } from '@mui/material';

interface ProfileSectionProps {
  title: string;
  content: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, content }) => (
  <div className="profile__row">
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" gutterBottom>
      {content}
    </Typography>
  </div>
);

export default ProfileSection;
