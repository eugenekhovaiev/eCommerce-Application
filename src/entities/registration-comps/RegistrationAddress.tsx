import CityInput from '../inputs-comps/CityInput';
import StreetInput from '../inputs-comps/StreetInput';
import BuildingInput from '../inputs-comps/BuildingInput';
import UnitInput from '../inputs-comps/UnitInput';
import PostalCodeInput from '../inputs-comps/PostalCodeInput';
import CountryInput from '../inputs-comps/CountryInput';
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
      />
      <BuildingInput
        variant="outlined"
        className="form__input form__input_building"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
      />
      <UnitInput
        variant="outlined"
        className="form__input form__input_unit"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
      />
      <CityInput
        variant="outlined"
        className="form__input form__input_city"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
      />
      <PostalCodeInput
        variant="outlined"
        className="form__input form__input_zip"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
      />
      <CountryInput
        className="form__input form__input_country"
        isShipping={props.isShipping}
        control={props.control}
        errors={props.errors}
      />
    </div>
  );
};

export default RegistrationAddress;
