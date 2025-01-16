import React from 'react'

const SignIn = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">User Name</label>
          <input type="text" placeholder='Enter User Name' />
        </div>
        <div>
          <label htmlFor="">User Password</label>
          <input type="password" placeholder='Enter Your Password' />
        </div>
        <button type='submit'>Sigin</button>
      </form>
    </div>
  )
}

export default SignIn
