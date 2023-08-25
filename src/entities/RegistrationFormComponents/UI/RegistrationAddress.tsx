import CityInput from '../../../shared/UI/Inputs/address/CityInput';
import StreetInput from '../../../shared/UI/Inputs/address/StreetInput';
import BuildingInput from '../../../shared/UI/Inputs/address/BuildingInput';
import UnitInput from '../../../shared/UI/Inputs/address/UnitInput';
import PostalCodeInput from '../../../shared/UI/Inputs/address/PostalCodeInput';
import CountryInput from '../../../shared/UI/Inputs/address/CountryInput';
import { IInputProps } from '../../../shared/types';

const RegistrationAddress = (props: IInputProps): JSX.Element => {
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
