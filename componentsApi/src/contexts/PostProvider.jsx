import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
export const PostContext = createContext({})

const PostProvider = ({children}) => {
    const [ posts, setPosts ] = useState([]);
    const [ load, setload ] = useState(true);
    const [ error, seterror ] = useState(null);

    /**
     * Fetch Posts
     */
    useEffect( () => {
        const fetchData = async () => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data)
            }catch(err){
                seterror(err.message);
            }finally{
                setload(false);
            }
        }
        fetchData();
    }, [])

    if( load ) return <div>Loading ...</div>
    if( error ) return <div>Error:{error}</div>

  return (
    <PostContext.Provider value ={{ posts, setPosts, load, setload, error, seterror }}>
    {children}
    </PostContext.Provider>

  )
}

export default PostProvider
