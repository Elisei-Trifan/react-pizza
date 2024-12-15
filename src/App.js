/* eslint-disable no-unused-vars */
import React from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

// import pizzas from './assets/pizzas.json'

import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/slices/filterSlice'

export const searchContext = React.createContext()

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const filter = useSelector((state) => state.filter.value)
  const count = useSelector((state) => state.filter.count)
  const dispatch = useDispatch()

  console.log(filter, count)

  return (
    <div className="App">
      <div className="wrapper">
        <searchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </searchContext.Provider>
      </div>
      <button onClick={() => dispatch(increment())}>qeahtrssds</button>
    </div>
  )
}

export default App
