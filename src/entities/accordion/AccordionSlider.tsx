import AccordionElement from '../../shared/UI/accordionElement/AccordionElement';
import Typography from '@mui/material/Typography';
import SliderElement from '../../shared/UI/sliderElement/SliderElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { AccordionSliderProps } from '../../shared/types';

const AccordionSlider = (props: AccordionSliderProps): JSX.Element => {
  const fullClassName = getFullClassName('accordion', props.additionalClassName);
  const minDistance = 5;

  const handleChange = (event: Event, newValue: number | number[], activeThumb: number): void => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      props.setState([Math.min(newValue[0], props.state[1] - minDistance), props.state[1]]);
    } else {
      props.setState([props.state[0], Math.max(newValue[1], props.state[0] + minDistance)]);
    }
  };

  return (
    <AccordionElement
      additionalClassName={fullClassName}
      label={props.label}
      details={
        <div className="form__slider-wrapper">
          <SliderElement
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.state}
            onChange={handleChange}
          />
          <Typography className="form__slider-label">
            From ${props.state[0]} - To ${props.state[1]}
          </Typography>
        </div>
      }
    />
  );
};

export default AccordionSlider;
