import Button from '@mui/material/Button';

interface IButtonProps {
  title: string;
}

const ButtonAuth: React.FC<IButtonProps> = ({ title }) => {
  return <Button type="submit">{title}</Button>;
};

export default ButtonAuth;
