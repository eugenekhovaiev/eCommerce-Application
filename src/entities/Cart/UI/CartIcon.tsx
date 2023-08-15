import Link from '../../../shared/UI/link/Link';
import Img from '../../../shared/UI/image/Img';
import Basket from '../../../shared/assets/Basket.svg';
import { ICartIconProps } from '../types';

function CartIcon(props: ICartIconProps): JSX.Element {
  return (
    <Link className={props.className}>
      <Img src={Basket} alt="cart"></Img>
    </Link>
  );
}

export default CartIcon;
