import Link from '../../../shared/UI/link/Link';
import Img from '../../../shared/UI/image/Img';
import Basket from '../../../shared/assets/Basket.svg';

function CartIcon(): JSX.Element {
  return (
    <Link>
      <Img src={Basket} alt="cart"></Img>
    </Link>
  );
}

export default CartIcon;
