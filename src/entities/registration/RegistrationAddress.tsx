import CityInput from '../inputs/CityInput';
import StreetInput from '../inputs/StreetInput';
import BuildingInput from '../inputs/BuildingInput';
import UnitInput from '../inputs/UnitInput';
import PostalCodeInput from '../inputs/PostalCodeInput';
import CountryInput from '../inputs/CountryInput';
import { RegistrationAddressProps } from '../../shared/types';

const RegistrationAddress = (props: RegistrationAddressProps): JSX.Element => {
  return (
    <div className="registration__address-info">
      <StreetInput
        variant="outlined"
        className="form__input form__input_street"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
        defaultValue={props.defaultValues?.defaultStreet}
        default={props.default}
      />
      <BuildingInput
        variant="outlined"
        className="form__input form__input_building"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
        defaultValue={props.defaultValues?.defaultBuilding}
        default={props.default}
      />
      <UnitInput
        variant="outlined"
        className="form__input form__input_unit"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
        defaultValue={props.defaultValues?.defaultUnit}
        default={props.default}
      />
      <CityInput
        variant="outlined"
        className="form__input form__input_city"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
        defaultValue={props.defaultValues?.defaultCity}
        default={props.default}
      />
      <PostalCodeInput
        variant="outlined"
        className="form__input form__input_zip"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
        value={props.defaultValues?.defaultPostalCode}
        default={props.default}
      />
      <CountryInput
        className="form__input form__input_country"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
        defaultValue={props.defaultValues?.defaultCountry}
        default={props.default}
      />
    </div>
  );
};

export default RegistrationAddress;
