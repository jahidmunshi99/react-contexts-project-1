import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className='container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8'><Outlet/></div>
    <Footer/>
    </>
  )
}

export default Layout