import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-4xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-3xl flex flex-wrap'>
          <span className='text-slate-500 block'>Sahand</span>
          <span className='text-slate-700 block'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type="text"
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-600'></FaSearch>
        </form>
        <ul className='flex gap-4'>
        <Link to='/Home'>
          <li className='hidden sm:inline text-slate-700 hover:underline text-3xl'>Home</li>
          </Link>
          <Link to ='/About'>
          <li className='hidden sm:inline text-slate-700 hover:underline text-3xl'>About</li>
          </Link>
          <Link to='/Signin'>
          <li className=' text-slate-700 hover:underline  text-3xl'>Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
