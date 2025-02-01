import React, { useContext } from "react";
import { Link } from "react-router";
import { UserAuth } from "./AuthProvider";


const LoginForm = () => {
  const {userLogIn} = useContext(UserAuth)

  const handleSignIn = (e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    userLogIn(email, password)
    .then((result)=>{
      const user = result.user
    }).catch((error)=>{
      console.error(error.message);
    })
  }


  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className=" bg-gray-100 shadow-lg rounded-lg p-8 w-sm">
        <h2 className="text-2xl font-bold mb-6 text-[#EF4444] text-center">Login Your Account</h2>

        <form onSubmit={handleSignIn}>
          <div className=''>
            <div className="">
              <label htmlFor="email" className="pb-2 block text-sm font-medium text-gray-700">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="pb-2 block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          {
            <p className='text-red-500'></p>
          }

          <div className="flex flex-col gap-4 mt-4">
            <button
              type="submit"
              className="bg-[#EF4444] py-2 w-full hover:bg-red-600 font-normal text-white border-none rounded-sm"
            >
              Login
            </button>
          </div>

          <div className='flex justify-between items-center'>
            <hr className=' text-gray-300 w-full' />
            <div className="divider text-center my-2 px-4">OR</div>
            <hr className=' text-gray-300 w-full' />
          </div>



          <div className="flex flex-col gap-4 mb-4">
            <button              
              type="button"
              className="w-full flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100"
            >
              {/* <FcGoogle className='text-xl' />  */}
              Sign In with Google
            </button>

          </div>

        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account
          <Link
            to="/signup"
            className="font-bold hover:underline text-[#EF4444] pl-3 cursor-pointer">SignUp/Register
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
