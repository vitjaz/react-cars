import React from 'react';
import CartEmptyBlock from '../components/CartEmptyBlock';
import CartFullBlock from '../components/CartFullBlock';

import { useSelector } from 'react-redux';

function Cart () {
  const { totalCount } = useSelector(state => state.cart);

  return (
    <>
      {totalCount === 0
        ? (
        <CartEmptyBlock />
          )
        : (
        <CartFullBlock />
          )}
    </>
  );
}

export default Cart;
