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