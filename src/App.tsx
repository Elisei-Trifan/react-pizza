/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react'

import Home from './pages/Home'
// import NotFound from './pages/NotFound.tsx'
// import Cart from './pages/Cart'

import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'
// import FullPizza from './components/FullPizza.tsx'
import MyLayout from './components/layout/MyLayout'

const Cart = React.lazy(() => import('./pages/Cart.tsx'))
const FullPizza = React.lazy(() => import('./components/FullPizza.tsx'))
const NotFound = React.lazy(() => import('./pages/NotFound.tsx'))

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route path="" element={<Home />} />
            <Route
              path="cart"
              element={
                <Suspense fallback={<div>Загрузка корзины...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="pizza/:id"
              element={
                <Suspense fallback={<div>Загрузка ...</div>}>
                  <FullPizza />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Загрузка ...</div>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
