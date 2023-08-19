import { TextFieldVariants } from '@mui/material';
// import { TextFieldPropsColorOverrides } from '@mui/material';
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

export interface IForm {
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

export interface IAddress {
  country: string;
  streetName: string;
  building: string;
  apartment: string;
  postalCode: string;
  city: string;
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
}

export interface ICheckboxProps extends IInputProps {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
  checked: boolean;
}
