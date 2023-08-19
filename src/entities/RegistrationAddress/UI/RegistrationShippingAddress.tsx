import CityShippingInput from '../../../shared/UI/Inputs/address/CityShippingInput';
import StreetShippingInput from '../../../shared/UI/Inputs/address/StreetShippingInput';
import BuildingShippingInput from '../../../shared/UI/Inputs/address/BuildingShippingInput';
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
        control={props.control}
        errors={props.errors}
      />
      <BuildingShippingInput
        variant="outlined"
        className="form__input form__input_building"
        control={props.control}
        errors={props.errors}
      />
      <UnitShippingInput
        variant="outlined"
        className="form__input form__input_unit"
        control={props.control}
        errors={props.errors}
      />
      <CityShippingInput
        variant="outlined"
        className="form__input form__input_city"
        control={props.control}
        errors={props.errors}
      />
      <PostalCodeShippingInput
        variant="outlined"
        className="form__input form__input_zip"
        control={props.control}
        errors={props.errors}
      />
      <CountryShippingInput className="form__input form__input_country" control={props.control} errors={props.errors} />
    </div>
  );
};

export default RegistrationShippingAddress;