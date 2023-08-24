import CityShippingInput from '../../../shared/UI/Inputs/address/CityShippingInput';
import StreetShippingInput from '../../../shared/UI/Inputs/address/StreetShippingInput';
import BuildingInput from '../../../shared/UI/Inputs/address/BuildingInput';
import UnitShippingInput from '../../../shared/UI/Inputs/address/UnitShippingInput';
import PostalCodeShippingInput from '../../../shared/UI/Inputs/address/PostalCodeShippingInput';
import CountryShippingInput from '../../../shared/UI/Inputs/address/CountryShippingInput';
import { IInputProps } from '../../../shared/types';

const RegistrationShippingAddress = (props: IInputProps): JSX.Element => {
  return (
    <div className="registration__address-info">
      <StreetShippingInput
        variant="outlined"
        className="form__input form__input_street"
        isShipping={true}
        control={props.control}
        errors={props.errors}
      />
      <BuildingInput
        variant="outlined"
        className="form__input form__input_building"
        isShipping={true}
        control={props.control}
        errors={props.errors}
      />
      <UnitShippingInput
        variant="outlined"
        className="form__input form__input_unit"
        isShipping={true}
        control={props.control}
        errors={props.errors}
      />
      <CityShippingInput
        variant="outlined"
        className="form__input form__input_city"
        isShipping={true}
        control={props.control}
        errors={props.errors}
      />
      <PostalCodeShippingInput
        variant="outlined"
        className="form__input form__input_zip"
        isShipping={true}
        control={props.control}
        errors={props.errors}
      />
      <CountryShippingInput
        className="form__input form__input_country"
        isShipping={true}
        control={props.control}
        errors={props.errors}
      />
    </div>
  );
};

export default RegistrationShippingAddress;
