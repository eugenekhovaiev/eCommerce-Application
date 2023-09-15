import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import getActiveCart from '../../shared/api/user/cart/getActiveCart';
import { useCartContext } from '../../shared/lib/contexts/CartContext';

const Cart = (): JSX.Element => {
  const { cart } = useCartContext();

  const handleClick = async (): Promise<void> => {
    const response = await getActiveCart();
    console.log(response);
    console.log(cart);
  };

  return (
    <main className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Cart page content will be here.</h2>
        <ButtonElement title="Get cart" onClick={handleClick} />
      </div>
    </main>
  );
};

export default Cart;
