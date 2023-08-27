import CityInput from '../Inputs/CityInput';
import StreetInput from '../Inputs/StreetInput';
import BuildingInput from '../Inputs/BuildingInput';
import UnitInput from '../Inputs/UnitInput';
import PostalCodeInput from '../Inputs/PostalCodeInput';
import CountryInput from '../Inputs/CountryInput';
import { InputProps } from '../../shared/types';

const RegistrationAddress = (props: InputProps): JSX.Element => {
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
