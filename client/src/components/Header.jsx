import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className=' p-8  flex justify-between items-center'>
        <h1 className='font-extrabold text-4xl tracking-wide text-indigo-500 tracking-wider'  >Logo</h1>
        <nav className='flex items-center gap-8'>
            <a  className='font-medium text-gray-300 text-xl tracking-wide  border-b duration-200 py-1 border-b-transparent transition-all hover:border-indigo-500 ' href="/">Home</a>
            <a  className='font-medium text-gray-300 text-xl tracking-wide  border-b duration-200 py-1 border-b-transparent transition-all hover:border-indigo-500 ' href="/contact">Contact</a>
        </nav>
        <button className='py-2 px-6 rounded-lg bg-indigo-500'>Login</button>
    </div>
  )
}

export default Header