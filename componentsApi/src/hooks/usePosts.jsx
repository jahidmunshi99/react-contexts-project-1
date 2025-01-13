import React from 'react'
import { useContext } from 'react'
import { PostContext } from '../contexts/PostProvider'


const usePosts = () => {
    const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }
    const {posts, setPosts, load, setload, error, seterror} = context
    
  return{posts, setPosts, load, setload, error, seterror}
}

export default usePosts
