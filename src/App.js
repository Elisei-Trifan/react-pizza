/* eslint-disable no-unused-vars */
import React from 'react'
import Categories from './components/Categories'
import Header from './components/Header'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import Sceleton from './components/PizzaBlock/Sceleton'
import Sort from './components/Sort'

// import pizzas from './assets/pizzas.json'

import './scss/app.scss'

function App() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://6756ce9ec0a427baf94a792f.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setTimeout(() => {
          setItems(arr)
          setIsLoading(false)
        }, 1000)
      })
  }, [])

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
              {isLoading
                ? [...new Array(6)].map((_, i) => <Sceleton key={i} />)
                : items.map((pizza) => (
                    <PizzaBlock key={pizza.id} {...pizza} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
