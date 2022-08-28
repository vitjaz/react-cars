import React from 'react';
import styles from './CarBlock.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

function CarBlock (props) {
  const { id, title, imageURL, transmission, engine, price, countInCart } = props;
  const [ activeTransmission, setActiveTransmission ] = React.useState({
    id: 'tr_01',
    title: 'МКПП'
  });
  const [ activeEngine, setActiveEngine ] = React.useState({
    id: 'engine_02',
    title: '1,5 л'
  });
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);

  let count = 0;
  if (cart.length > 0) {
    const el = cart.find((el) => el.id === id);
    if (el) {
      count = el.countInCart;
    }
  }

  return (
    <div className={styles.wrapper}>
      <img src={imageURL} alt="car_photo" />
      <p className={styles.title}>{title}</p>
      <div className={styles.selectors}>
        <div className={styles.transmissionSelector}>
          {transmission.map((el) => <p key={el.id} className={activeTransmission.id === el.id ? styles.active : ''} onClick={() => setActiveTransmission(el)}>{el.title}</p>)}
        </div>
        <div className={styles.engineSelector}>
          {engine.map((el) => <p key={el.id} className={activeEngine.id === el.id ? styles.active : ''} onClick={() => setActiveEngine(el)}>{el.title}</p>)}
        </div>
      </div>
      <div className={styles.priceBlock}>
          <p>от {price} ₽</p>
          <button
            className={styles.addButton}
            onClick={() => {
              dispatch(addItem({
                id,
                title,
                imageURL,
                activeTransmission,
                activeEngine,
                price,
                countInCart
              }));
            }}>
              {count === 0
                ? '+ Добавить'
                : (
                <>
                  <span>Добавить | </span>
                  <span>{count}</span>
                </>
                  )}
          </button>
        </div>
    </div>
  );
}

export default CarBlock;
