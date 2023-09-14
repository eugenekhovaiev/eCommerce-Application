import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import createCart from '../../shared/api/user/createCart';

const Cart = (): JSX.Element => {
  const handleClick = async (): Promise<void> => {
    const response = await createCart();
    console.log(response);
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
