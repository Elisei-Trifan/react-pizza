import React from 'react'
import Header from '../Header.tsx'
import { Outlet } from 'react-router-dom'

const MyLayout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default MyLayout
