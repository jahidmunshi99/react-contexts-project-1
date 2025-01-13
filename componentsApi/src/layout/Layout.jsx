import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <>
        <Navbar/>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <Outlet/>
          </div>
        <Footer/>      
    </>
  )
}

export default Layout
