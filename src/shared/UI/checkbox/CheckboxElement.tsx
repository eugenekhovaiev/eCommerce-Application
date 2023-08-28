import { Checkbox } from '@mui/material';
import { CheckboxProps } from '../../types';
import getFullClassName from '../../lib/helpers/getFullClassName';

const CheckboxElement = (props: CheckboxProps): JSX.Element => {
  const fullClassName = getFullClassName('checkbox', props.additionalClassName);

  return <Checkbox className={fullClassName} color="secondary" onChange={props.onChange} checked={props.checked} />;
};

export default CheckboxElement;
