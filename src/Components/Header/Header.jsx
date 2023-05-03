import React, { useContext } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { RxAvatar } from 'react-icons/rx';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {

  const {logout,user}= useContext(AuthContext);

  const location =  useLocation()

 

  const handleLogOut = ()=>{
    logout()
   
   
  }

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
   <p className='gap-3'>
    
    <ActiveLink to='/'>Home</ActiveLink>

     <ActiveLink to='/blog' >Blog</ActiveLink>
    </p>  

    </div>
  </div>
  <div className="navbar-center">
    <Link to='/' className="btn btn-ghost normal-case text-xl text-green-600 hover:bg-green-200 ">Bangla Foods</Link>
  </div>
  <div className="navbar-end">
  {user ? <a className='btn mx-2 bg-success border-none hover:bg-green-400 text-white'><button onClick={handleLogOut}>Logout</button></a> : <Link to='/login' className='btn hover:bg-green-400 hover:text-black border-none'>Login</Link>}
       {user&& <p>{user.email}</p>}
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
       {/* { user || <div className="rounded-full">
          <div className='text-3xl'><RxAvatar/></div>
        </div>} */}
       { user?.photoURL ? <div className="avatar"  title={user.displayName}>
  <div className="w-10 rounded-full" title={user.displayName} >
    <img src={user.photoURL} title={user.displayName}/>
  </div>
</div> : <div className="rounded-full">
          <div className='text-3xl'><RxAvatar/></div>
        </div>}
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        
        <li><a> 
           {/* <button onClick={handleLogOut}>Logout</button>  */}
        {user ? <a ><button onClick={handleLogOut}>Logout</button></a> : <Link to='/login'>Login</Link>}
       {user&& <p>{user.email}</p>}
        
         </a></li>
      </ul>
    </div>
    
  </div>
</div>


        </div>
    );
};

export default Header;