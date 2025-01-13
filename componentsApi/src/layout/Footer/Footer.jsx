import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='bg-gray-800 py-4'>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center">
        <div className='text-slate-200'>All Right Resolved <Link className='text-violet-700' to='https://proghive.com'>Proghive</Link> || Designed by Jahid Munshi</div>
      </div>
    </footer>
  )
}

export default Footer
