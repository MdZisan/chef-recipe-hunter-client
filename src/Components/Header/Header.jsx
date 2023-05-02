import React from 'react';

import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';

const Header = () => {
    return (
        <div>
            <div className="navbar  bg-green-50 " > 
  <div className="navbar-start">
  <div className="dropdown md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <Link className='ml-2 btn bg-transparent text-black border-0 hover:bg-transparent hover:bg-green-300'>Home</Link>
     <Link className='ml-2 btn bg-transparent text-black border-0 hover:bg-transparent hover:bg-green-300'>Blog</Link>
      </ul>
    </div>
    <div className="hidden md:block">
     <Link to='/' className='ml-2 btn bg-transparent text-black border-0 hover:bg-transparent hover:bg-green-300'>Home</Link>
     <Link className='ml-2 btn bg-transparent text-black border-0 hover:bg-transparent hover:bg-green-300'>Blog</Link>

    </div>
  </div>
  <div className="navbar-center">
    <Link to='/' className="btn btn-ghost normal-case text-xl text-green-600 hover:bg-green-200 ">Bangla Foods</Link>
  </div>
  <div className="navbar-end">
    <Link to='/login' className='btn hover:bg-green-400 hover:text-black border-none'>Login</Link>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="rounded-full">
          <div className='text-3xl'><RxAvatar/></div>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        
        <li><a>Logout</a></li>
      </ul>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Header;