import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import App from '../App';
import Error from '../pages/Error';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import RegistrationForm from '../pages/RegistrationForm';
import LoginForm from '../pages/LoginForm';
import PostsProvider from '../providers/PostsContextsProvider';
import SinglePost from '../components/Post';


const Index = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<PostsProvider><Blog /></PostsProvider>} />
                    <Route path="/blog/post/:id" element={<PostsProvider><SinglePost /></PostsProvider>} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/signup" element={<RegistrationForm />} />
                    <Route path="/signin" element={<LoginForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index







