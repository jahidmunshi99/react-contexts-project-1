import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { DotLoader } from "react-spinners";
import {toast, Toaster} from "react-hot-toast";


const LoginForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  if( loading ){
    return <DotLoader color="#3de5b5" />
  }
 

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (!email && !password) {
      toast.error("Please fill in all fields");
      return;    
    }

    if (!email) {
      toast.error("Please fill in email field"); 
      return;     
    } 

    if (!password) {
      toast.error("Please fill in password field");
      return;     
    }

    setLoading(true);

    /**Authentication with Firebase */

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      toast.success("Login successful!")
      setLoading(false);
      // Signed in 
      navigate('/')
    })
    .catch((error) => {
      setLoading(false);
      toast.error(error.message)
    });

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-20">
      <div className="w-full max-w-md p-8 space-y-6 bg-neutral-900 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {/* if (!email) {
              toast.error("Please fill in email field")
            } */}
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-slate-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
      {/* Add the Toaster component here */}
      <Toaster />
    </div>
  );
};

export default LoginForm;
