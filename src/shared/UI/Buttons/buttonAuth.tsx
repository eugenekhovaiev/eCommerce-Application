import { ButtonProps } from '../../types';

import Button from '@mui/material/Button';

const ButtonAuth: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <Button type="submit" className={className} color="secondary">
      {title}
    </Button>
  );
};

export default ButtonAuth;
