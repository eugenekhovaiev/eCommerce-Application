import { Control, FieldErrors } from 'react-hook-form';

export interface ILinkProps {
  to: string;
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

export interface ISignInForm {
  email: string;
  password: string;
}

export interface IButtonProps {
  title: string;
}

export interface IEmailInputProps {
  control: Control<ISignInForm>;
  errors: FieldErrors<ISignInForm>;
}

export interface IPasswordInputProps {
  control: Control<ISignInForm>;
  errors: FieldErrors<ISignInForm>;
}
