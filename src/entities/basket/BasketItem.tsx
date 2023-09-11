import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import SpinnerInput from '../inputs/SpinnerInput';

const BasketItem = (): JSX.Element => {
  return (
    <div className="cart-items__item">
      <div className="cart-items__name">
        <div className="image">
          <img src={'src/shared/assets/image-example.jpg'} alt={'example'} />
        </div>
        <div className="title">Show Leash for Medium-Sized Dogs</div>
      </div>
      <div className="cart-items__price">$0.00</div>
      <div className="cart-items__quantity">
        <SpinnerInput />
      </div>
      <div className="cart-items__total">$0.00</div>
      <div className="cart-items__close">
        <ButtonElement title="+" />
      </div>
    </div>
  );
};

export default BasketItem;
