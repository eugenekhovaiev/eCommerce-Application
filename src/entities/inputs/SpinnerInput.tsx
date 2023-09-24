import { useState } from 'react';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import { SpinnerInputProps } from '../../shared/types';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
import changeProductQuantity from '../../shared/api/user/cart/changeProductQuantity';
import { CircularProgress } from '@mui/material';

const SpinnerInput = (props: SpinnerInputProps): JSX.Element => {
  const [spinnerValue, setSpinnerValue] = useState(props.value ? props.value : 0);
  const [quantityIsProcessing, setQuantityIsProcessing] = useState(false);
  const { updateActiveCart } = useActiveCartContext();

  const handleIncrease = async (): Promise<void> => {
    setQuantityIsProcessing(true);
    const updatedCart = (await changeProductQuantity(props.id, spinnerValue + 1)).body;
    setSpinnerValue(spinnerValue + 1);
    updateActiveCart(updatedCart);
    setQuantityIsProcessing(false);
  };

  const handleDecrease = async (): Promise<void> => {
    setQuantityIsProcessing(true);
    const value = spinnerValue - 1 >= 1 ? spinnerValue - 1 : 1;
    const updatedCart = (await changeProductQuantity(props.id, value)).body;
    setSpinnerValue(value);
    updateActiveCart(updatedCart);
    setQuantityIsProcessing(false);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (!isNaN(+value)) {
      setSpinnerValue(+value);
      if (props.setQuantity) props.setQuantity(+value);
    }
  };

  return !quantityIsProcessing ? (
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
  ) : (
    <CircularProgress size={25} className="loading-indicator loading-overlay__indicator" color="secondary" />
  );
};

export default SpinnerInput;
