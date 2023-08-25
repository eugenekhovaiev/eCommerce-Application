import Img from '../../shared/UI/image/Img';
import Basket from '../../shared/assets/Basket.svg';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import LinkElement from '../../shared/UI/LinkElement/LinkElement';
import { LinkProps } from '../../shared/types';

function CartLink(props: LinkProps): JSX.Element {
  const fullClassName = getFullClassName('link_cart', props.additionalClassName);
  return (
    <LinkElement additionalClassName={fullClassName} onClick={props.onClick} to="/cart">
      <Img src={Basket} alt="cart" />
    </LinkElement>
  );
}

export default CartLink;
