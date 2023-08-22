import { TextField } from '@mui/material';
import { IInputProps } from '../../types';
import { Controller } from 'react-hook-form';
import nameValidation from '../../lib/validation/nameValidation';

const FirstNameInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="firstName"
      rules={nameValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="First Name"
          className={props.className}
          color="secondary"
          variant={props.variant || 'standard'}
          onChange={(e): void => field.onChange(e)}
          value={field.value || ''}
          error={!!props.errors.firstName?.message}
          helperText={props.errors.firstName?.message}
        />
      )}
    />
  );
};

export default FirstNameInput;
