import React, { useState } from 'react'
import usePosts from '../hooks/usePosts';
import { useNavigate } from 'react-router-dom';



const Posts = () => {
  const { posts, loading, error } = usePosts();
  const [ showPosts, setShowPosts ] = useState(6)
  const navigate = useNavigate();

  /**
   * Hanlde Load More Button
   */
    const handleLoadMore = () => {
        setShowPosts(showPosts + 3)
    }

    const handleSinglePost = (id) => {
        navigate(`/blog/post/${id}`)
    }

  if( loading ) return <h1>Loading...</h1>
  if( error ) return <h1>Error</h1>
  
  return (
    <div className="container mx-auto py-20">
        <div className='grid grid-cols-3 gap-4'>
        {
            posts.slice(0, showPosts).map((post )=><div 
            key = {post.id}
            post = {post}       
            className='bg-gray-200 p-4'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => handleSinglePost(post.id)} className='bg-black text-white px-4 py-2 rounded-full mt-3 hover:bg-slate-800'>Read More..</button>
            </div>)
        }
        </div>
        <button onClick={handleLoadMore} className='bg-black text-white px-4 py-2 rounded-full mt-3 hover:bg-slate-800 text-center'>Load More</button>
    </div>
  )
}

export default Posts
