import CityInput from '../../../shared/UI/Inputs/address/CityInput';
import StreetInput from '../../../shared/UI/Inputs/address/StreetInput';
import BuildingInput from '../../../shared/UI/Inputs/address/BuildingInput';
import UnitBillingInput from '../../../shared/UI/Inputs/address/UnitBillingInput';
import PostalCodeInput from '../../../shared/UI/Inputs/address/PostalCodeInput';
import CountryInput from '../../../shared/UI/Inputs/address/CountryInput';
import { IInputProps } from '../../../shared/types';

const RegistrationBillingAddress = (props: IInputProps): JSX.Element => {
  return (
    <div className="registration__address-info">
      <StreetInput
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
      <CityInput
        variant="outlined"
        className="form__input form__input_city"
        isShipping={false}
        control={props.control}
        errors={props.errors}
      />
      <PostalCodeInput
        variant="outlined"
        className="form__input form__input_zip"
        isShipping={false}
        control={props.control}
        errors={props.errors}
      />
      <CountryInput
        className="form__input form__input_country"
        isShipping={false}
        control={props.control}
        errors={props.errors}
      />
    </div>
  );
};

export default RegistrationBillingAddress;
