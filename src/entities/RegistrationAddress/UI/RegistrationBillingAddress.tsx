import CityBillingInput from '../../../shared/UI/Inputs/address/CityBillingInput';
import StreetBillingInput from '../../../shared/UI/Inputs/address/StreetBillingInput';
import BuildingBillingInput from '../../../shared/UI/Inputs/address/BuildingBillingInput';
import UnitBillingInput from '../../../shared/UI/Inputs/address/UnitBillingInput';
import PostalCodeBillingInput from '../../../shared/UI/Inputs/address/PostalCodeBillingInput';
import CountryBillingInput from '../../../shared/UI/Inputs/address/CountryBillingInput';
import { IInputProps } from '../../../shared/types';
import { useState } from 'react';

const RegistrationBillingAddress = (props: IInputProps): JSX.Element => {
  const [select, setSelect] = useState('');

  return (
    <div className="registration__address-info">
      <StreetBillingInput
        variant="outlined"
        className="form__input form__input_street"
        control={props.control}
        errors={props.errors}
      />
      <BuildingBillingInput
        variant="outlined"
        className="form__input form__input_building"
        control={props.control}
        errors={props.errors}
      />
      <UnitBillingInput
        variant="outlined"
        className="form__input form__input_unit"
        control={props.control}
        errors={props.errors}
      />
      <CityBillingInput
        variant="outlined"
        className="form__input form__input_city"
        control={props.control}
        errors={props.errors}
      />
      <PostalCodeBillingInput
        variant="outlined"
        className="form__input form__input_zip"
        selected={select}
        control={props.control}
        errors={props.errors}
      />
      <CountryBillingInput
        selected={select}
        setSelect={setSelect}
        className="form__input form__input_country"
        control={props.control}
        errors={props.errors}
      />
    </div>
  );
};

export default RegistrationBillingAddress;
