import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import { TotalCostProps } from '../../shared/types';

const TotalCost = (props: TotalCostProps): JSX.Element => {
  const subtotal = props.subtotal ? (props.subtotal / 100).toFixed(2) : '0.00';
  const discount = props.discount ? (props.discount / 100).toFixed(2) : '0.00';
  const total = props.total ? (props.total / 100).toFixed(2) : '0.00';
  return (
    <div className="total-cost">
      <div className="total-cost__row">
        <h3 className="total-cost__title">Cart Totals</h3>
      </div>
      <div className="total-cost__row">
        <h4 className="total-cost__pricing-element">Subtotal</h4>
        <div className="total-cost__price">${subtotal}</div>
      </div>
      <div className="total-cost__row">
        <h4 className="total-cost__pricing-element">Discount</h4>
        <div className="total-cost__price">-${discount}</div>
      </div>
      <div className="total-cost__row">
        <h4 className="total-cost__pricing-element">Total</h4>
        <div className="total-cost__price">${total}</div>
      </div>
      <div className="total-cost__checkout">
        <ButtonElement title="Proceed to checkout" />
      </div>
    </div>
  );
};

export default TotalCost;
