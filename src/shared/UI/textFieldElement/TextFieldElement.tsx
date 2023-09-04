import { TextField } from '@mui/material';
import { TextFieldProps } from '../../types';
import getFullClassName from '../../lib/helpers/getFullClassName';

const TextFieldElement = (props: TextFieldProps): JSX.Element => {
  const fullClassName = getFullClassName('text-input', props.additionalClassName);

  const controlledInput = (
    <TextField
      type={props.type || 'text'}
      label={props.label}
      color="secondary"
      className={fullClassName}
      variant={props.variant || 'standard'}
      onChange={props.onChange}
      value={props.value ? props.value : ''}
      error={props.error}
      helperText={props.helperText}
      InputProps={{
        endAdornment: props.endAdornment,
      }}
    />
  );

  const uncontrolledInput = (
    <TextField
      type={props.type || 'text'}
      label={props.label}
      color="secondary"
      className={fullClassName}
      variant={props.variant || 'standard'}
      onChange={props.onChange}
      defaultValue={props.defaultValue ? props.defaultValue : ''}
      error={props.error}
      helperText={props.helperText}
      InputProps={{
        endAdornment: props.endAdornment,
      }}
    />
  );

  return props.value !== undefined ? controlledInput : uncontrolledInput;
};

export default TextFieldElement;
