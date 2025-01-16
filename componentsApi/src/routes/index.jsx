import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../Pages/Home'
import Blog from '../Pages/Blog'
import Portfolio from '../Pages/Portfolio'
import Contact from '../Pages/Contact'
import Layout from '../layout/Layout';
import SinglePost from '../components/SinglePost';
import PostProvider from '../contexts/PostProvider';
import SignIn from '../Pages/SignIn';


/**
 * All Routes
 */
const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/blog' element={
                  <PostProvider>
                    <Blog/>
                  </PostProvider>
                  }/>
                <Route path='/blog/post/:id/:title' element={<PostProvider><SinglePost/></PostProvider>}></Route>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<Error/>}/>

                {/* Signin/Signout Route */}
                <Route path='/signin' element = {<SignIn/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter> 
  )
}

export default AllRoutes
