import React from "react";
import { useParams } from "react-router";
import usePosts from "../hooks/usePosts";


const SinglePost = () => {
    const { id, title }    = useParams();
    const { posts, error } = usePosts();

    if (error) {
        return (
            <div className="container mx-auto my-10">
                <h1 className="text-3xl font-bold">Error loading posts</h1>
                <p className="text-red-500">{error.message}</p>
            </div>
        );
    }

    const post = posts?.find((post) => post.id === parseInt(id) && post.title === title);

    if (!post) {
        return (
            <div className="container mx-auto my-10">
                <h1 className="text-3xl font-bold">Post not found</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-700 mt-4">{post.body}</p>
        </div>
    );
};
export default SinglePost; 