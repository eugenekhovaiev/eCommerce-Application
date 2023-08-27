import { ReactNode } from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { TextFieldVariants } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { FieldChangeHandler } from '@mui/x-date-pickers/internals';
import { DateValidationError } from '@mui/x-date-pickers';

export interface LinkProps {
  to?: string;
  target?: string;
  title?: string;
  additionalClassName?: string;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface ImgProps {
  src?: string;
  alt: string;
  className?: string;
}

export interface LogoProps {
  title?: string;
  iconSrc?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface Form {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  streetShipping: string;
  streetBilling: string;
  buildingShipping: string;
  buildingBilling: string;
  unitShipping: string;
  unitBilling: string;
  cityShipping: string;
  cityBilling: string;
  postalCodeShipping: string;
  postalCodeBilling: string;
  countryShipping: string;
  countryBilling: string;
  defaultAddress: boolean;
}

export interface ButtonProps {
  title: string;
  className?: string;
}

export interface InputProps {
  control: Control<Form>;
  errors: FieldErrors<Form>;
  variant?: TextFieldVariants;
  className?: string;
  isShipping?: boolean;
  isFirstName?: boolean;
}

export interface TextFieldProps {
  label: string;
  type?: string;
  additionalClassName?: string;
  value?: string;
  error?: boolean;
  helperText?: string;
  variant?: TextFieldVariants;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  endAdornment?: JSX.Element;
}

export interface DateFieldProps {
  additionalClassName?: string;
  value?: string;
  error?: boolean;
  helperText?: string;
  onChange?: FieldChangeHandler<string | null, DateValidationError>;
}

export interface SelectProps {
  label: string;
  selectItems: object;
  additionalClassName?: string;
  value?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

export interface CheckboxProps extends InputProps {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
  checked: boolean;
}

export interface ValidationRealTime {
  isValid: boolean;
  message: string;
}
