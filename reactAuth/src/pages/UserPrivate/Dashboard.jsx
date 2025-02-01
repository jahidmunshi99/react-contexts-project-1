import React, { useContext } from 'react'
import Container from '../../components/Common/Container'
import { UserAuth } from '../../authentication/AuthProvider'


const Dashboard = () => {
  const {user} = useContext(UserAuth)
  return (
    <Container>
      <div className='py-20 mx-auto flex items-center text-center justify-center'>
        <div className='text-center mx-auto'>
          <div className='text-5xl text-center pb-30'>Profile</div>
          {
            user && 
            <>
            <div className='w-25 mx-auto'>
              <img className='rounded-full border-amber-600 border-4' src={user.photoURL} alt="" />
            </div>
            <div>Name: {user.displayName}</div>
            <div>Email: {user.email}</div>
            </>
          }
        </div>
      </div>

    </Container>

  )
}

export default Dashboard