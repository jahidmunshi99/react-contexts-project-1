import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const PostsContext = React.createContext({});

const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect( () => {
        /**
         * Fetch posts from the API
         */
        const fetchPosts = async () => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                return setPosts(response.data);
            }catch (err) {
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        fetchPosts();
    }, [])   


  return (
    <PostsContext.Provider value={{posts, loading, error}}>
      {children}
    </PostsContext.Provider>
  )
}

export default PostsProvider
