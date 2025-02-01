import React from 'react'
import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";

const Error = () => {
  return (
    <MotionConfig transition={{ duration: 0.6 }}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
            <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl font-bold text-indigo-600"
            >
            404
            </motion.h1>
            <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4"
            >
            Oops! Page Not Found
            </motion.h2>
            <p className="text-gray-600 mt-2 max-w-lg">
            The page you are looking for doesn’t exist or has been moved.
            </p>
            {/* <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src="https://source.unsplash.com/500x300/?lost,road"
            alt="Not Found Illustration"
            className="w-full max-w-md mt-6 rounded-lg shadow-lg"
            /> */}
            <Link to="/" className="mt-6">
            <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
            >
                Go Home
            </motion.button>
            </Link>
        </div>
    </MotionConfig>

  )
}

export default Error