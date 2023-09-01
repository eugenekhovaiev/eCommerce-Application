import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import getFullClassName from '../../lib/helpers/getFullClassName';
import { SelectProps } from '../../types';

const SelectElement = (props: SelectProps): JSX.Element => {
  const fullClassName = getFullClassName('select-input', props.additionalClassName);

  return (
    <FormControl className={fullClassName} color="secondary" error={props.error}>
      <InputLabel color="secondary" id={`select-${props.label.toLowerCase()}`}>
        {props.label}
      </InputLabel>
      <Select
        labelId={`select-${props.label.toLowerCase()}`}
        color="secondary"
        defaultValue={props.defaultValue || ''}
        label={props.label}
        onChange={props.onChange}
      >
        {Object.entries(props.selectItems).map((item) => (
          <MenuItem key={item[0]} color="secondary" value={item[0]}>
            {item[1]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectElement;
