import Categories from './components/Categories'
import Header from './components/Header'
import PizzaBlock from './components/PizzaBlock'
import Sort from './components/Sort'

import pizzas from './assets/pizzas.json'

import './scss/app.scss'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />

              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((pizza) => (
                <PizzaBlock
                  key={pizza.id}
                  title={pizza.title}
                  price={pizza.price}
                  img={pizza.imageUrl}
                  sizes={pizza.sizes}
                  types={pizza.types}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
