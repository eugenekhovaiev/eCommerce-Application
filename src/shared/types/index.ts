import { ReactNode } from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { TextFieldVariants } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { FieldChangeHandler } from '@mui/x-date-pickers/internals';
import { DateValidationError } from '@mui/x-date-pickers';
import { LocalizedString } from '@commercetools/platform-sdk';
// import FilterForm from '../../widgets/filter/FilterForm';
import { ProductProjection } from '@commercetools/platform-sdk';
import Category from './Category';

export interface LinkProps {
  to?: string;
  target?: string;
  title?: string;
  additionalClassName?: string;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
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

export interface FilterFormFields {
  category1: string;
  category2: string;
  category3: string;
  category4: string;
}

export interface ButtonProps {
  title: string;
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
}

export interface CatalogFilterProps {
  name: keyof FilterFormFields;
  label: string;
  control: Control<FilterFormFields>;
  selectItems: object;
  errors: FieldErrors<FilterFormFields>;
  className?: string;
}

export interface AccordionProps {
  label: JSX.Element;
  additionalClassName?: string;
  details?: JSX.Element;
}

export interface AccordionCheckboxProps {
  label: JSX.Element;
  states: boolean[];
  setStates: React.Dispatch<React.SetStateAction<boolean[]>>;
  selectItems?: object;
  additionalClassName?: string;
  multiple?: boolean;
}

export interface AccordionSliderProps {
  label: string;
  state: number[];
  setState: React.Dispatch<React.SetStateAction<number[]>>;
  additionalClassName?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface RegistrationAddressProps extends InputProps {
  isShipping?: boolean;
}

export interface RegistrationUserInfoProps extends InputProps {
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
  onKeyDown?:  React.KeyboardEventHandler<HTMLDivElement>;
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
  variant?: TextFieldVariants;
  error?: boolean;
  helperText?: string;
  value?: string;
  onChange?: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

export interface CheckboxProps {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
  checked: boolean;
  additionalClassName?: string;
}

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  additionalClassName?: string;
  value: number | number[];
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
}

export interface ValidationRealTime {
  isValid: boolean;
  message: string;
}

export interface LoggedInContext {
  isLoggedIn: boolean;
  updateLoggedIn: (isLoggedIn: boolean) => void;
}

export interface CountryContext {
  selectedShippingCountry: string;
  setSelectedShippingCountry: (country: string) => void;
  selectedBillingCountry: string;
  setSelectedBillingCountry: (country: string) => void;
}

export interface FilterContext {
  isCategoryUpdated: boolean;
  updateIsCategoryUpdated: (isCategoryUpdated: boolean) => void;
}

export interface ProductCardProps {
  url: string;
  name: LocalizedString;
  image?: string;
  priceOriginal?: string | number;
  priceDiscounted?: string | number;
  description?: LocalizedString;
}

export interface FilterAttribute {
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

export interface FilterFormProps {
  setProducts: React.Dispatch<React.SetStateAction<[] | ProductProjection[]>>;
  // isCategoryUpdated: boolean;
  categoriesIds?: string;
}

export interface ProductCategoriesProps {
  setProducts: React.Dispatch<React.SetStateAction<[] | ProductProjection[]>>;
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
  mainCategories?: Category[];
}

export interface ProductsQueryParams {
  searchText?: string;
  sort?: {
    // by: 'price' | 'name.en-US';
    // order: 'asc' | 'desc';
    by: string;
    order: string;
  };
  filters?: Filters;
}

export interface PriceProps {
  priceOriginal?: string | number;
  priceDiscounted?: string | number;
  additionalClassName?: string;
}
