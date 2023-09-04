import { ReactNode } from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { TextFieldVariants } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { FieldChangeHandler } from '@mui/x-date-pickers/internals';
import { DateValidationError } from '@mui/x-date-pickers';
import { Customer, CustomerUpdate } from '@commercetools/platform-sdk';
import { Dayjs } from 'dayjs';
import { LocalizedString } from '@commercetools/platform-sdk';

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
  additionalClassName?: string;
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
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  streetShipping: string;
  streetBilling: string;
  building: string;
  buildingShipping: string;
  buildingBilling: string;
  unit: string;
  unitShipping: string;
  unitBilling: string;
  city: string;
  cityShipping: string;
  cityBilling: string;
  postalCode: string;
  postalCodeShipping: string;
  postalCodeBilling: string;
  country: string;
  countryShipping: string;
  countryBilling: string;
  defaultAddress: boolean;
}

export interface ButtonProps {
  title: string;
  variant?: 'outlined' | 'text' | 'contained';
  additionalClassName?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface InputProps {
  control: Control<Form>;
  errors: FieldErrors<Form>;
  variant?: TextFieldVariants;
  className?: string;
  label?: string;
  defaultValue?: string;
  value?: string;
}

export interface PasswordInputProps extends InputProps {
  name?: 'currentPassword' | 'newPassword' | 'confirmPassword';
}

export interface RegistrationAddressProps extends InputProps {
  isShipping?: boolean;
  default?: boolean;
  defaultValues?: {
    defaultStreet?: string;
    defaultBuilding?: string;
    defaultUnit?: string;
    defaultCity?: string;
    defaultPostalCode?: string;
    defaultCountry?: string;
  };
}

export interface RegistrationUserInfoProps extends InputProps {
  isFirstName?: boolean;
  defaultValues?: {
    defaultFirstName?: string;
    defaultLastName?: string;
    defaultEmail?: string;
    passwordLabel?: string;
    defaultDateOfBirth?: string;
  };
}

export interface TextFieldProps {
  label: string;
  type?: string;
  additionalClassName?: string;
  defaultValue?: string;
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
  defaultValue?: string;
  error?: boolean;
  helperText?: string;
  onChange?: FieldChangeHandler<Dayjs | string | null, DateValidationError>;
}

export interface SelectProps {
  label: string;
  selectItems: object;
  additionalClassName?: string;
  // value?: string;
  defaultValue?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

export interface CheckboxProps {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
  checked: boolean;
  additionalClassName?: string;
}

export interface ValidationRealTime {
  isValid: boolean;
  message: string;
}

export interface UserDataContext {
  userData: Customer | undefined;
  updateUserData: (userData: Customer | undefined) => void;
}

export interface CountryContext {
  selectedShippingCountry: string;
  setSelectedShippingCountry: (country: string) => void;
  selectedBillingCountry: string;
  setSelectedBillingCountry: (country: string) => void;
}

export interface CustomerUpdateWithId extends CustomerUpdate {
  id: string;
}
export interface ProductCardProps {
  url: string;
  name: LocalizedString;
  image?: string;
  priceOriginal?: string | number;
  priceDiscounted?: string | number;
  description?: LocalizedString;
}

interface FilterAttribute {
  enumName: string;
  value: string;
}

export interface Filters {
  categoriesIds?: string;
  priceRange?: {
    from: number;
    to: number;
  };
  attributes?: FilterAttribute[];
  searchKeywords?: string;
}

export interface ProductsQueryParams {
  sort?: {
    by: 'price' | 'name.en-US';
    order: 'asc' | 'desc';
  };
  filters?: Filters;
}

export interface PriceProps {
  priceOriginal?: string | number;
  priceDiscounted?: string | number;
  additionalClassName?: string;
}
