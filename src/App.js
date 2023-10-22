// import logo from './logo.svg';
import './scss/app.scss';
// import pizzas from './assets/pizzas.json'; для работы без бекенда через локальный файл
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
