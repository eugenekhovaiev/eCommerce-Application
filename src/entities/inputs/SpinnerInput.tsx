import { useState } from 'react';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import { SpinnerInputProps } from '../../shared/types';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
import changeProductQuantity from '../../shared/api/user/cart/changeProductQuantity';

const SpinnerInput = (props: SpinnerInputProps): JSX.Element => {
  const [spinnerValue, setSpinnerValue] = useState(props.value ? props.value : 0);
  const { updateActiveCart } = useActiveCartContext();

  const handleIncrease = async (): Promise<void> => {
    const response = await changeProductQuantity(props.id, spinnerValue + 1);
    setSpinnerValue(spinnerValue + 1);
    updateActiveCart(response.body);
  };

  const handleDecrease = async (): Promise<void> => {
    const value = spinnerValue - 1 >= 1 ? spinnerValue - 1 : 1;
    const response = await changeProductQuantity(props.id, value);
    setSpinnerValue(value);
    updateActiveCart(response.body);
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
        readOnly
      />
      <div className="input-spinner__increase">
        <ButtonElement title="+" onClick={handleIncrease} />
      </div>
    </div>
  );
};

export default SpinnerInput;
