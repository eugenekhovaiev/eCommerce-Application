import { ReactNode } from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { TextFieldVariants } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { FieldChangeHandler } from '@mui/x-date-pickers/internals';
import { DateValidationError } from '@mui/x-date-pickers';
import { Customer, CustomerUpdate } from '@commercetools/platform-sdk';
import { Dayjs } from 'dayjs';
import { LocalizedString } from '@commercetools/platform-sdk';
import { ProductProjection } from '@commercetools/platform-sdk';
import Category from './Category';
import { Image } from '@commercetools/platform-sdk';

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

export interface FilterFormFields {
  category1: string;
  category2: string;
  category3: string;
  category4: string;
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
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
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
  variant?: TextFieldVariants;
  defaultValue?: string;
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

export interface UserDataContext {
  userData: Customer | undefined;
  updateUserData: (userData: Customer | undefined) => void;
}

export interface LastQueryParametersContext {
  lastQueryParameters: ProductsQueryParams | undefined;
  updateLastQueryParameters: (queryParameters: ProductsQueryParams) => void;
}

export interface CountryContext {
  selectedShippingCountry: string;
  setSelectedShippingCountry: (country: string) => void;
  selectedBillingCountry: string;
  setSelectedBillingCountry: (country: string) => void;
}

export interface ProductsArrayContext {
  productsArray: ProductProjection[] | [];
  updateProductsArray: (productsArray: ProductProjection[] | []) => void;
}

export interface FilterContext {
  isCategoryUpdated: boolean;
  updateIsCategoryUpdated: (isCategoryUpdated: boolean) => void;
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
  search?: string;
  categoriesIds?: string;
}

export interface ProductCategoriesProps {
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  mainCategories?: Category[];
}

export interface ProductsQueryParams {
  limit?: number;
  offset?: number;
  searchText?: string;
  sort?: {
    // by: 'price' | 'name.en-US';
    // order: 'asc' | 'desc';
    by: string;
    order: string;
  };
  filters?: Filters;
}

export interface SearchInputProps {
  additionalClassName?: string;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  setCategoryId?: React.Dispatch<React.SetStateAction<string>>;
}

export interface PriceProps {
  priceOriginal?: string | number;
  priceDiscounted?: string | number;
  additionalClassName?: string;
}

export interface SwiperProps {
  images: Image[];
}

export interface PaginationProps {
  cardsPerPage: number;
  totalCards: number;
  paginate: (arg: number) => void;
  currentPage: number;
}
