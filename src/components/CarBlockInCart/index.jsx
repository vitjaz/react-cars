import React from 'react';

import styles from './CarBlockInCart.module.scss';

import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem, decrementItem, removeItem } from '../../redux/slices/cartSlice';

function CarBlockInCart ({ id, title, imageUrl, price, transmission, engine, countInCart }) {

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.carBlock}>
        <img src={imageUrl} alt="car" />
        <div>
          <h2>{title}</h2>
          <p>{transmission.title}, {engine.title}</p>
        </div>
      </div>
      <div className={styles.counterBlock}>
        <AiOutlineMinusCircle
          onClick={() => {
            dispatch(decrementItem(id));
          }}
          className={styles.minus}
        />
        <span>{countInCart}</span>
        <AiOutlinePlusCircle onClick={() => dispatch(addItem({ id }))} className={styles.plus}/>
      </div>
      <div className={styles.price}>
        {price} ₽
      </div>
      <TiDeleteOutline onClick={() => dispatch(removeItem(id))} className={styles.deleteButton}/>
    </div>
  );
}

export default CarBlockInCart;
