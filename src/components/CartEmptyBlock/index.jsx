import React from 'react';

import { Link } from 'react-router-dom';

import EmptyCartSvg from '../../assets/static-svg/empty-cart.svg';
import styles from './CartEmptyBlock.module.scss';

function CartEmptyBlock () {
  return (
    <div className={styles.wrapper}>
        <h1>Корзина пустая 😕</h1>
        <p>Вероятно, вы ничего еще не добавили в нее...</p>
        <img width="400px" src={EmptyCartSvg} alt="empty-cart-svg" />
        <Link to="/"><button>Вернуться на главную</button></Link>
    </div>
  );
}

export default CartEmptyBlock;
