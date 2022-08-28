import React from 'react';
import { Get } from 'react-axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory, setActiveSort, setFiltersFromUrl } from '../redux/slices/categorySortSlice';

import CarBlock from '../components/CarBlock';
import CarLoader from '../components/CarLoader';
import Sort from '../components/Sort';
import categoriesData from '../categories.json';
import { CARS_URL } from '../urls';

function MainPage () {
  const { activeCategory, activeSort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMounted = React.useRef(false);

  const urlParams = window.location.search;

  const params = {
    category: activeCategory === 'cat_01' ? '' : activeCategory,
    sortBy: 'price',
    order: activeSort === 0 ? 'desc' : 'asc'
  };

  // take url params from qs
  React.useEffect(() => {
    if (urlParams) {
      const newParams = qs.parse(urlParams.substring(1));
      dispatch(setFiltersFromUrl(newParams));
    } else {
      // force default params to request if user click to '/' link
      dispatch(setFiltersFromUrl({
        category: 'cat_01',
        order: 'asc'
      }));
    }
  }, [ dispatch, urlParams ]);

  // navigate to our url params, after mounting
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        ...params
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;

  }, [ params.category, params.sortBy, params.order, navigate ]);

  return (
        <>
          <div className='catAndSortWrapper'>
            <div className="categoriesWrapper">
              {categoriesData.map((cat) => {
                return <div className={cat.id === activeCategory ? 'active' : ''} key={cat.id} title={cat.title} onClick={() => dispatch(setActiveCategory(cat.id))}>{cat.title}</div>;
              })}
            </div>
            <Sort onChangeSort={(sort) => dispatch(setActiveSort(sort))} />
          </div>
          <div className="carsWrapper">
            {/* I khow that this is may be not the best decision, but it's interesting experiment */}
            <Get url={CARS_URL} debounce={200} params={params}>
              {(error, response, isLoading, makeRequest) => {
                if (error) {
                  return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>);
                } else if (isLoading) {
                  window.scrollTo(0, 0);
                  return (<>{Array(3).fill().map((_, i) => <CarLoader key={i} />)}</>);
                } else if (response) {
                  return (<>{response.data.map((car) => {
                    return (<CarBlock
                      key={car.id}
                      imageUrl={car.imageURL}
                      {...car}
                    />);
                  })} </>);
                }
                // default action before request
                return (null);
              }}
            </Get>
          </div>
        </>
  );
}

export default MainPage;
