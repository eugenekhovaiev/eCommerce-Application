import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import addDiscountCode from '../../shared/api/user/cart/addDiscountCode';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';

const Coupon = (): JSX.Element => {
  const { activeCart, updateActiveCart } = useActiveCartContext();

  const handleApplyClick = async (): Promise<void> => {
    const updatedCart = (await addDiscountCode('testDiscountCode')).body;
    updateActiveCart(updatedCart);
    console.log(activeCart);
  };

  return (
    <div className="coupon">
      <h3 className="coupon__title">Coupon</h3>
      <p className="coupon__helper-text">Enter your coupon code if you have one.</p>
      <TextFieldElement label="Coupon code" variant="outlined" additionalClassName="coupon__text-field" />
      <div className="coupon__apply-button">
        <ButtonElement title="Apply" onClick={handleApplyClick} />
      </div>
    </div>
  );
};

export default Coupon;
