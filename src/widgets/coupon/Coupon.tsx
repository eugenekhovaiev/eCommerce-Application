import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import addDiscountCode from '../../shared/api/user/cart/addDiscountCode';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
import { CouponForm } from '../../shared/types';
// import ImageElement from '../../shared/UI/imageElement/ImageElement';
// import checkMark from '../../shared/assets/check-mark.svg';
// import alarmLight from '../../shared/assets/alarm-light.svg';
import { Alert } from '@mui/material';

const Coupon = (): JSX.Element => {
  const { handleSubmit, control } = useForm<CouponForm>();
  const { updateActiveCart } = useActiveCartContext();
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [currentCoupon, setCurrentCoupon] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const onSubmit: SubmitHandler<CouponForm> = async (data): Promise<void> => {
    try {
      //'testDiscountCode'
      const updatedCart = (await addDiscountCode(data.coupon)).body;
      updateActiveCart(updatedCart);
      setAppliedCoupon(data.coupon);
      setCurrentCoupon(data.coupon);
      setIsCouponApplied(true);
    } catch {
      setCurrentCoupon(data.coupon);
      setIsCouponApplied(false);
    }
  };

  return (
    <div className="coupon">
      <h3 className="coupon__title">Coupon</h3>
      <p className="coupon__helper-text">Enter your coupon code if you have one.</p>
      <form className="coupon__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="coupon"
          render={({ field }): JSX.Element => (
            <TextFieldElement
              label="Coupon code"
              variant="outlined"
              additionalClassName="coupon__text-field"
              onChange={(e): void => field.onChange(e)}
            />
          )}
        />
        {appliedCoupon !== '' && (
          // <div className={'coupon__coupon-message coupon__coupon-message_applied'}>
          //   <ImageElement additionalClassName="icon" src={checkMark} alt="check" />
          //   <span className="coupon__coupon-message-title">{appliedCoupon}</span>
          //   is applied
          // </div>
          <Alert severity="success" className="">
            <span className="coupon__coupon-message-title">{appliedCoupon}</span> is applied
          </Alert>
        )}
        {currentCoupon !== '' && !isCouponApplied && (
          // <div className={'coupon__coupon-message coupon__coupon-message_denied'}>
          //   <ImageElement additionalClassName="icon" src={alarmLight} alt="check" />
          //   <span className="coupon__coupon-message-title">{currentCoupon}</span>
          //   does not exist
          // </div>
          <Alert severity="error" className="">
            <span className="coupon__coupon-message-title">{currentCoupon}</span> does not exist
          </Alert>
        )}
        <div className="coupon__apply-button">
          <ButtonElement type="submit" title="Apply" />
        </div>
      </form>
    </div>
  );
};

export default Coupon;
