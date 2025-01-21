import React from "react";
import usePosts from "../hooks/usePosts";
import { useParams } from "react-router";

const Post = () => {
  const { posts, loading, error } = usePosts();
  const { id } = useParams(); // Get the dynamic ID from the URL

  // Convert the `id` to a number (if post IDs are integers)
  const postId = parseInt(id);

  // Find the post by ID
  const post = posts.find((post) => post.id === postId);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error occurred while fetching posts</h1>;

  return (
    <div className="container mx-auto py-20">
      {post ? (
        <div className="bg-gray-200 p-6 rounded-md">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ) : (
        <h1 className="text-red-500 text-xl">Post Not Found</h1>
      )}
    </div>
  );
};

export default Post;
