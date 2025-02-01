import React, { useContext } from 'react'
import { Link } from 'react-router'
import { UserAuth } from './AuthProvider';
import { updateProfile } from "firebase/auth";



const SignUp = () => {
  const {userSignUp, setSucess, sucess, error, setError} = useContext(UserAuth)

  const handleSignUp = (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const name = e.target.name.value
    const photoURL = e.target.photoURL.value
    const password = e.target.password.value
    userSignUp(email, password)
    .then((result)=>{
      const user = result.user
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
      setSucess(true)
    }).catch((error)=>{
      console.error(error.message);
      setError(true)
    })


    // alert(email+ name + photoURL + password)
  }
  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-md">
        <h2 className="text-2xl font-bold mb-6 text-[#EF4444] text-center">Create your Account</h2>

        <form onSubmit={handleSignUp}>
          <div className="">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Bonnie Green"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="">
              <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Photo URL"
              />
            </div>

            <div className="my-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
               
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                
              />
            </div>
          </div>
          <div className="my-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="terms"
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-600">
                By signing up, you agree to Flowbite's Terms of Use and Privacy Policy.
              </span>
            </label>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="updates"
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-600">
                Email me about product updates and resources.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#EF4444] py-2 w-full hover:bg-red-600 font-normal text-white border-none rounded-sm"
          >
            Create an account
          </button>

          {sucess && <p className='text-green-600'>Congratualations!! You Sucessfully Registerd!</p>}
          {error && <p className='text-red-500'>Something Went wrong</p>}
          



          <div className="divider text-center my-3">OR</div>

          {/* Google and Apple Sign-Up */}
          <div className="flex flex-col gap-4 mb-4">
            <button              
              type="button"
              className="w-full flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100"
            >
              {/* <FcGoogle className="text-xl" />  */}
              Sign up with Google
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="font-bold hover:underline text-[#EF4444]">
            Login here
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp