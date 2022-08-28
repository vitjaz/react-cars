import React from 'react';
import { FiShoppingCart, FiTrash2, FiChevronLeft } from 'react-icons/fi';
import CarBlockInCart from '../CarBlockInCart';
import { Link } from 'react-router-dom';

import styles from './CartFullBlock.module.scss';
import { clearCart } from '../../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addSpacesToNumber } from '../../helpers/formatBigNumbers';

function CartFullBlock () {

  const { cart, totalSum, totalCount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1> <FiShoppingCart /> Корзина</h1>
        <button onClick={() => dispatch(clearCart())}> <FiTrash2 /> Очистить корзину</button>
      </div>
      <div className={styles.carsWrapper}>
        {cart && cart.map((cartItem, i) => (
          <CarBlockInCart
            id={cartItem.id}
            key={cartItem.id}
            title={cartItem.title}
            imageUrl={cartItem.imageURL}
            price={cartItem.price}
            transmission={cartItem.activeTransmission}
            engine={cartItem.activeEngine}
            countInCart={cartItem.countInCart}
          />))}
      </div>
      <div className={styles.sumBlock}>
        <p>Всего машин: <span>{totalCount} шт.</span></p>
        <p>Сумма заказа: <span>{addSpacesToNumber(totalSum)} ₽</span></p>
      </div>
      <div className={styles.buttonBlock}>
        <Link to="/"><button className={styles.backButton}><FiChevronLeft /> Вернуться назад</button></Link>
        <button className={styles.payButton}>Оплатить сейчас</button>
      </div>
    </div>
  );
}

export default CartFullBlock;
