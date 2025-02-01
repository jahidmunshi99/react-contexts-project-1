import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../layout/Layout'
import Home from '../pages/Home';
import Projects from '../pages/Projects'
import Error from '../pages/Error';
import Blog from '../pages/Blog';
import Team from '../pages/Team'
import Contact from '../pages/Contact';
import LogIn from '../authentication/LogIn'
import SignUp from '../authentication/SignUp'
import AuthProvider from '../authentication/AuthProvider';
import Dashboard from '../pages/UserPrivate/Dashboard'
import Profile from '../pages/UserPrivate/Profile'
import Setting from '../pages/UserPrivate/Setting'
import PrivateRoute from './PrivateRoute';




const AllRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/project' element={<Projects/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signin' element={<LogIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='*' element={<Error/>}/>

            {/* User Route */}

            <Route path='/user/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path='/user/setting' element={<PrivateRoute><Setting/></PrivateRoute>}/>


          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AllRoutes