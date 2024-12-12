/* eslint-disable no-unused-vars */
import React from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

// import pizzas from './assets/pizzas.json'

import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
