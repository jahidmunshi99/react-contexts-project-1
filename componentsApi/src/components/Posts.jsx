import React, { useState } from 'react';
import usePosts from '../hooks/usePosts';
import {useNavigate} from 'react-router'


const Posts = () => {
    const { posts } = usePosts()
    const  [ showPosts, setShowPosts ]  = useState(9)
    const navigate = useNavigate();

    const handleReadMore = (title, id) => {
        navigate(`/blog/post/${title}/${id}`)
    }

    const hanldeLoadMore = () => {
        setShowPosts((prevCount) => prevCount + 3);
    }
        
return(
    <>
        <div className="grid grid-cols-3 gap-5">
            { posts.slice(0, showPosts).map((post) => (
                    <div key={post.id} className="p-5 border rounded">
                        <div className="card">
                            <h1 className="text-xl font-bold">{post.title}</h1>
                            <p className="text-gray-700">{post.body}</p>
                            <button onClick={() => handleReadMore(post.id, post.title )} className="bg-black text-white px-4 py-2 rounded-full mt-4">
                                Read More..
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>

    {/* Load More Button */}
        { showPosts < posts.length && (
            <div className="flex justify-center mt-12">
                <button
                    onClick={hanldeLoadMore}
                    className="bg-lime-500 text-black font-bold px-8 py-3 rounded-full hover:bg-red-600 hover:text-zinc-950"
                >
                    Load More..
                </button>
            </div>
        )}
    </>
    )
};

export default Posts;

