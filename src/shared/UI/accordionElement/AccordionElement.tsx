import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionProps } from '../../types';

const AccordionElement = (props: AccordionProps): JSX.Element => {
  return (
    <Accordion className={props.additionalClassName}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {/* <Typography>{props.label}</Typography> */}
        {props.label}
      </AccordionSummary>
      <AccordionDetails>{props.details}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionElement;
