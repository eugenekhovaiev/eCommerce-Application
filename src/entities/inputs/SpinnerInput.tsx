import { useState } from 'react';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';

const SpinnerInput = (): JSX.Element => {
  const [spinnerValue, setSpinnerValue] = useState(0);

  const handleIncrease = (): void => {
    setSpinnerValue(spinnerValue + 1);
  };

  const handleDecrease = (): void => {
    setSpinnerValue(spinnerValue - 1 >= 0 ? spinnerValue - 1 : 0);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (!isNaN(+value)) {
      setSpinnerValue(+value);
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
