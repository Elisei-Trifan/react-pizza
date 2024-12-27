/* eslint-disable no-unused-vars */
import React from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

import './scss/app.scss'
import { Routes, Route, Outlet } from 'react-router-dom'
import FullPizza from './components/FullPizza'
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
