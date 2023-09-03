// import logo from './logo.svg';
import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price="250" />
            <PizzaBlock title="Американская" price="350" />
            <PizzaBlock title="Охотничья" price="110" />
            <PizzaBlock title="Острая" price={2150} />
            <PizzaBlock title="Гавайская" price={5100} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
