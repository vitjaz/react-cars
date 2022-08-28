import React from 'react';
import styles from './Header.module.scss';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { formatFunc } from '../../helpers/formatBigNumbers';

function Header () {
  const { totalSum, totalCount } = useSelector(state => state.cart);

  return (
    <>
      <div className={styles.wrapper}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={styles.nameBlock}>
            <img className={styles.logo} src="./img/logo/car.png" alt="logo" />
            <div>
              <h2 className={styles.siteName}>REACT CARS</h2>
              <p className={styles.siteSlogan}>Самые премиальные машины во вселенной</p>
            </div>
          </div>
        </Link>
        <Link to="cart" className={styles.cartButton}>{formatFunc(totalSum)} ₽ | <FaShoppingCart /> {totalCount}</Link>
      </div>
      <div className={styles.divider}></div>
    </>
  );
}

export default Header;
