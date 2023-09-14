import { useState, useEffect } from 'react';
import BasketItems from '../../widgets/basketItems/BasketItems';
import Coupon from '../../widgets/coupon/Coupon';
import TotalCost from '../../widgets/totalCost/TotalCost';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import emptyBag from '../../shared/assets/empty-bag.svg';
import { LineItem } from '@commercetools/platform-sdk';
import { Cart as CartType } from '@commercetools/platform-sdk';

const Cart = (): JSX.Element => {
  const [cart, setCart] = useState<CartType>();

  useEffect(() => {
    // const cartProducts: LineItem[] = [];
    const cartProducts: LineItem[] = [
      {
        id: '',
        productId: '2bf06edb-5b1b-4449-aaad-35c12ed46d86',
        name: { 'en-US': 'Show Leash for Medium-Sized Dogs' },
        productType: { typeId: 'product-type', id: '1fb08f90-f400-44fa-b62b-62a9411d3bbe' },
        variant: {
          id: 1,
          images: [
            {
              dimensions: { w: 1280, h: 1280 },
              url: 'https://14cbb9b792312c0664ca-642e150b804a0b87b7a54365aaa41086.ssl.cf3.rackcdn.com/photo_1_2023-09-06_0-W92THchf.jpg',
            },
          ],
        },
        price: {
          id: '39955cca-cb53-40e3-bc98-bae460ca5b5d',
          value: {
            centAmount: 800,
            currencyCode: 'USD',
            fractionDigits: 2,
            type: 'centPrecision',
          },
        },
        quantity: 1,
        totalPrice: {
          centAmount: 800,
          currencyCode: 'USD',
          fractionDigits: 2,
          type: 'centPrecision',
        },
        priceMode: 'Embedded',
        discountedPricePerQuantity: [],
        taxedPricePortions: [],
        perMethodTaxRate: [],
        state: [],
        lineItemMode: 'Standard',
      },
    ];
    const newCart: CartType = {
      id: '',
      version: 0,
      lineItems: cartProducts,
      customLineItems: [],
      totalLineItemQuantity: 1,
      totalPrice: {
        centAmount: 800,
        currencyCode: 'USD',
        fractionDigits: 2,
        type: 'centPrecision',
      },
      taxMode: '',
      taxRoundingMode: '',
      taxCalculationMode: '',
      inventoryMode: '',
      cartState: '',
      shippingMode: '',
      shipping: [],
      itemShippingAddresses: [],
      discountCodes: [],
      directDiscounts: [],
      refusedGifts: [],
      origin: '',
      createdAt: '',
      lastModifiedAt: '',
    };
    const fetchData = async (): Promise<void> => {
      try {
        setCart(newCart);
      } catch (error) {
        console.log('Something went wrong!');
      }
    };

    fetchData();
  }, []);

  return (
    <main className="cart">
      {cart?.lineItems.length !== 0 ? (
        <div className="container cart__container">
          <div className="cart__items-wrapper">
            <BasketItems cartItems={cart?.lineItems} setCart={setCart} />
          </div>
          <div className="cart__coupon-wrapper">
            <Coupon />
          </div>
          <div className="cart__total-cost-wrapper">
            <TotalCost subtotal={cart?.totalPrice.centAmount} total={800} />
          </div>
        </div>
      ) : (
        <div className="container cart__container">
          <div className="cart__empty-wrapper">
            <div className="cart-empty">
              <div className="cart-empty__image">
                <ImageElement src={emptyBag} alt="empty bag" />
              </div>
              <h3 className="cart-empty__title">Your shopping cart is empty</h3>
              <p className="cart-empty__helper-text">Looks like you have not added anything to your cart</p>
              <LinkElement additionalClassName="cart-empty__link" title="Continue Shopping" to="/catalog" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
