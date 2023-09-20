import { useState } from 'react';
import BasketItem from '../../entities/basket/BasketItem';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import createCart from '../../shared/api/user/cart/createCart';
import deleteCart from '../../shared/api/user/cart/deleteCart';
import alarmLight from '../../shared/assets/alarm-light.svg';
import closeIcon from '../../shared/assets/close.svg';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
import { BasketItemsProps } from '../../shared/types';
import { Modal } from '@mui/material';

const BasketItems = (props: BasketItemsProps): JSX.Element => {
  const { updateActiveCart } = useActiveCartContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const clearCart = async (): Promise<void> => {
    await deleteCart();
    const newCart = (await createCart()).body;
    updateActiveCart(newCart);
    setModalIsOpen(false);
  };

  return (
    <div className="cart-items">
      <div className="cart-items__item cart-items__item_header">
        <div className="cart-items__name">Added Items</div>
        <div className="cart-items__price">Price</div>
        <div className="cart-items__quantity">Quantity</div>
        <div className="cart-items__total">Total</div>
      </div>
      {props.cartItems && props.cartItems.map((item) => <BasketItem key={item.name['en-US']} lineItem={item} />)}
      <div className="cart-items__clear-button">
        <ButtonElement title="Clear cart" onClick={openModal} />
      </div>
      <Modal open={modalIsOpen} onClose={closeModal} className="modal cart-items__modal">
        <div className="modal__content">
          <div className="modal__close" onClick={closeModal}>
            <ImageElement src={closeIcon} alt="close-modal" />
          </div>
          <div className="cart-items__modal-image">
            <ImageElement additionalClassName="image" src={alarmLight} alt="alarm" />
          </div>
          <h3 className="cart-items__modal-title">Are you sure?</h3>
          <p className="cart-items__modal-helper-text">That action cannot be reverted</p>
          <div className="cart-items__modal-buttons">
            <ButtonElement title="Yes" onClick={clearCart} additionalClassName="modal__button modal__button_confirm" />
            <ButtonElement title="No" onClick={closeModal} additionalClassName="modal__button modal__button_deny" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BasketItems;
