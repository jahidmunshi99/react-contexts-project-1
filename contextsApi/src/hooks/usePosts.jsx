import React, { useContext } from 'react'
import { PostsContext } from '../providers/PostsContextsProvider';

const usePosts = () => {
    const {posts, loading, error} = useContext(PostsContext);

  return (
    {posts, loading, error}
  )
}

export default usePosts
