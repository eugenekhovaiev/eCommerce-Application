import { ButtonProps } from '../../types';
import getFullClassName from '../../lib/helpers/getFullClassName';
import Button from '@mui/material/Button';

const ButtonElement: React.FC<ButtonProps> = (props: ButtonProps) => {
  const fullClassName = getFullClassName('button', props.additionalClassName);

  return (
    <Button type={props.type} className={fullClassName} color="secondary">
      {props.title} {props.children}
    </Button>
  );
};

export default ButtonElement;
