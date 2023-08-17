import { TextFieldVariants } from '@mui/material';
// import { TextFieldPropsColorOverrides } from '@mui/material';
import { Control, FieldErrors } from 'react-hook-form';

export interface ILinkProps {
  href?: string;
  target?: string;
  title?: string;
  className?: string;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface IImgProps {
  src?: string;
  alt: string;
  className?: string;
}

export interface ILogoProps {
  title?: string;
  iconSrc?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface IForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  postalCode?: string;
  country?: string;
}

export interface IButtonProps {
  title: string;
  className?: string;
}

export interface IInputProps {
  control: Control<IForm>;
  errors: FieldErrors<IForm>;
  variant?: TextFieldVariants;
  className?: string;
  // color?: OverridableStringUnion<"error" | "primary" | "secondary" | "info" | "success" | "warning", TextFieldPropsColorOverrides>
}
