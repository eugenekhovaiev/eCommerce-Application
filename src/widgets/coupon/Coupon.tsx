import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';

const Coupon = (): JSX.Element => {
  return (
    <div className="coupon">
      <h3 className="coupon__title">Coupon</h3>
      <p className="coupon__helper-text">Enter your coupon code if you have one.</p>
      <TextFieldElement label="Coupon code" variant="outlined" additionalClassName="coupon__text-field" />
      <div className="coupon__apply-button">
        <ButtonElement title="Apply coupon" />
      </div>
    </div>
  );
};

export default Coupon;
