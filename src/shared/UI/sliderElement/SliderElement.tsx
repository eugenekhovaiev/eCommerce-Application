import Slider from '@mui/material/Slider';
import { SliderProps } from '../../types';
import getFullClassName from '../../lib/helpers/getFullClassName';

const SliderElement = (props: SliderProps): JSX.Element => {
  const fullClassName = getFullClassName('slider', props.additionalClassName);

  return (
    <Slider
      className={fullClassName}
      value={props.value}
      color="secondary"
      step={props.step}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
      valueLabelDisplay="auto"
    />
  );
};

export default SliderElement;
