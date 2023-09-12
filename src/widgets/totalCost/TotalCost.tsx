import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';

const TotalCost = (): JSX.Element => {
  return (
    <div className="total-cost">
      <div className="total-cost__row">
        <h3 className="total-cost__title">Cart Totals</h3>
      </div>
      <div className="total-cost__row">
        <h4 className="total-cost__pricing-element">Subtotal</h4>
        <div className="total-cost__price">$0.00</div>
      </div>
      <div className="total-cost__row">
        <h4 className="total-cost__pricing-element">Discount</h4>
        <div className="total-cost__price">-$0.00</div>
      </div>
      <div className="total-cost__row">
        <h4 className="total-cost__pricing-element">Total</h4>
        <div className="total-cost__price">$0.00</div>
      </div>
      <div className="total-cost__checkout">
        <ButtonElement title="Proceed to checkout" />
      </div>
    </div>
  );
};

export default TotalCost;
