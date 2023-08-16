import { TextField } from '@mui/material';
import { IInputProps } from '../../types';
import { Controller } from 'react-hook-form';
import nameValidation from '../../lib/validation/nameValidation';

const LastNameInput = (props: IInputProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name="lastName"
      rules={nameValidation}
      render={({ field }): JSX.Element => (
        <TextField
          type="text"
          label="Last Name"
          className={props.className}
          color="secondary"
          variant={props.variant || 'standard'}
          onChange={(e): void => field.onChange(e)}
          value={field.value || ''}
          error={!!props.errors.lastName?.message}
          helperText={props.errors.lastName?.message}
        />
      )}
    />
  );
};

export default LastNameInput;
