/* eslint-disable no-unused-vars */
import React from 'react'

import Header from './components/Header'
import Home from './pages/Home'

// import pizzas from './assets/pizzas.json'

import './scss/app.scss'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Home />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
