import CityBillingInput from '../../../shared/UI/Inputs/address/CityBillingInput';
import StreetBillingInput from '../../../shared/UI/Inputs/address/StreetBillingInput';
import BuildingInput from '../../../shared/UI/Inputs/address/BuildingInput';
import UnitBillingInput from '../../../shared/UI/Inputs/address/UnitBillingInput';
import PostalCodeBillingInput from '../../../shared/UI/Inputs/address/PostalCodeBillingInput';
import CountryBillingInput from '../../../shared/UI/Inputs/address/CountryBillingInput';
import { IInputProps } from '../../../shared/types';

const RegistrationBillingAddress = (props: IInputProps): JSX.Element => {
  return (
    <div className="registration__address-info">
      <StreetBillingInput
        variant="outlined"
        className="form__input form__input_street"
        isShipping={false}
        control={props.control}
        errors={props.errors}
      />
      <BuildingInput
        variant="outlined"
        className="form__input form__input_building"
        isShipping={false}
        control={props.control}
        errors={props.errors}
      />
      <UnitBillingInput
        variant="outlined"
        className="form__input form__input_unit"
        isShipping={false}
        control={props.control}
        errors={props.errors}
      />
      <CityBillingInput
        variant="outlined"
        className="form__input form__input_city"
        isShipping={false}
        control={props.control}
        errors={props.errors}
      />
      <PostalCodeBillingInput
        variant="outlined"
        className="form__input form__input_zip"
        isShipping={false}
        control={props.control}
        errors={props.errors}
      />
      <CountryBillingInput
        className="form__input form__input_country"
        isShipping={false}
        control={props.control}
        errors={props.errors}
      />
    </div>
  );
};

export default RegistrationBillingAddress;
