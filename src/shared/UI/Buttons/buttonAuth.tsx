import { IButtonProps } from '../../types';

import Button from '@mui/material/Button';

const ButtonAuth: React.FC<IButtonProps> = ({ title }) => {
  return <Button type="submit">{title}</Button>;
};

export default ButtonAuth;
