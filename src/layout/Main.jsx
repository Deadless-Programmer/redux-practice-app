import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'

const Main = () => {
  return (
    <div>
        <Navbar/>
       <Outlet></Outlet>
    </div>
  )
}

export default Main