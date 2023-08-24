import StreetShippingInput from '../../../shared/UI/Inputs/address/StreetShippingInput';
import CityInput from '../../../shared/UI/Inputs/address/CityInput';
import BuildingInput from '../../../shared/UI/Inputs/address/BuildingInput';
import UnitShippingInput from '../../../shared/UI/Inputs/address/UnitShippingInput';
import PostalCodeShippingInput from '../../../shared/UI/Inputs/address/PostalCodeShippingInput';
import CountryInput from '../../../shared/UI/Inputs/address/CountryInput';
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
      <CityInput
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
      <CountryInput
        className="form__input form__input_country"
        isShipping={true}
        control={props.control}
        errors={props.errors}
      />
    </div>
  );
};

export default RegistrationShippingAddress;
