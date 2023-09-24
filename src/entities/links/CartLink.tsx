import ImageElement from '../../shared/UI/imageElement/ImageElement';
import Basket from '../../shared/assets/Basket.svg';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import { LinkProps } from '../../shared/types';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';

function CartLink(props: LinkProps): JSX.Element {
  const fullClassName = getFullClassName('link_cart', props.additionalClassName);
  const { activeCart } = useActiveCartContext();
  const numberOfProducts = activeCart?.totalLineItemQuantity;
  return (
    <LinkElement additionalClassName={fullClassName} onClick={props.onClick} to="/cart">
      <div className="cart-icon__wrapper">
        <ImageElement additionalClassName="cart-icon__image" src={Basket} alt="cart" />
        {numberOfProducts && <div className="cart-icon__number-of-products">{numberOfProducts}</div>}
      </div>
    </LinkElement>
  );
}

export default CartLink;
