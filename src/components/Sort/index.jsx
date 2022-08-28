import React from 'react';

import { useSelector } from 'react-redux';

import styles from './Sort.module.scss';

function Sort ({ onChangeSort }) {

  const { activeSort } = useSelector(state => state.filter);

  const listSort = [ 'От дорогих к дешевым', 'От дешевых к дорогим' ];
  const [ visiblePopup, setVisiblePopup ] = React.useState(false);
  const sortRef = React.useRef(false);

  React.useEffect(() => {
    // on mount
    const handleClickOutside = (e) => {
      if (!e.path.includes(sortRef.current)) {
        setVisiblePopup(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    // on unmount
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className={styles.wrapper}>
      <p>Сортировать: <span onClick={() => setVisiblePopup(!visiblePopup)}>{listSort[activeSort]}</span> </p>
      {visiblePopup &&
        <div className={styles.popup}>
          {listSort.map((el, i) => <p
            onClick={() => {
              onChangeSort(i);
              setVisiblePopup(false);
            }}
            className={el === listSort[activeSort] ? styles.active : ''}
            key={el}>{el}</p>
          )}
        </div>
      }
    </div>
  );
}

export default Sort;
