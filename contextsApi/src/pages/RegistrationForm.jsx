// Import the functions you need from the SDKs you need
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { auth } from "../firebase/FirebaseConfig"; // Update the path if necessary
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /**
   * Handle Registration Form Submit
   */
  const handleRegistrationForm = (e) => {
    e.preventDefault(); // Prevent form submission reload

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 7) {
      toast.error("Password must be at least 7 characters long");
      return;
    }

    // Firebase Registration
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Registration successful!");
        navigate("/")
        console.log("User registered:", userCredential.user);
      })
      .catch((error) => {
        console.error("Error during registration:", error.message);
        toast.error(error.message); // Show Firebase error
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-30">
      <div className="w-full max-w-md p-8 space-y-6 bg-neutral-900 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white">Register</h2>
        <form className="space-y-4" onSubmit={handleRegistrationForm}>
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-slate-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default RegistrationForm;
