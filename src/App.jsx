import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage.jsx';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
