/* eslint-disable no-unused-vars */
import React from 'react'

import Home from './pages/Home'
import NotFound from './pages/NotFound.tsx'
import Cart from './pages/Cart'

import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'
import FullPizza from './components/FullPizza.tsx'
import MyLayout from './components/layout/MyLayout'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
