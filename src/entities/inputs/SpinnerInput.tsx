import { useState } from 'react';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import { SpinnerInputProps } from '../../shared/types';

const SpinnerInput = (props: SpinnerInputProps): JSX.Element => {
  const [spinnerValue, setSpinnerValue] = useState(props.value ? props.value : 0);

  const handleIncrease = (): void => {
    setSpinnerValue(spinnerValue + 1);
    if (props.setQuantity) props.setQuantity(spinnerValue + 1);
  };

  const handleDecrease = (): void => {
    setSpinnerValue(spinnerValue - 1 >= 1 ? spinnerValue - 1 : 1);
    if (props.setQuantity) props.setQuantity(spinnerValue - 1 >= 1 ? spinnerValue - 1 : 1);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (!isNaN(+value)) {
      setSpinnerValue(+value);
      if (props.setQuantity) props.setQuantity(+value);
    }
  };

  return (
    <div className="input-spinner">
      <div className="input-spinner__decrease">
        <ButtonElement title="-" onClick={handleDecrease} />
      </div>
      <input
        type="text"
        className="input-spinner__text-field"
        value={spinnerValue}
        onChange={(e): void => handleOnChange(e)}
      />
      <div className="input-spinner__increase">
        <ButtonElement title="+" onClick={handleIncrease} />
      </div>
    </div>
  );
};

export default SpinnerInput;
