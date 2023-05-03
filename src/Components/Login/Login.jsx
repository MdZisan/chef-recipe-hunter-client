import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

  const {user,login,googleSignIn} = useContext(AuthContext)
// console.log(user,loading,createUser,login,googleSignIn);

const handleGoogleSignIn =()=>{
  googleSignIn()
  .then(result=>{
    const loggedUser = result.user;
    // console.log(loggedUser);
  })
  .catch(error=>{
    console.log(error);
  })

  

}


const handleLogin =(event)=>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  
  login(email,password)
  .then(result=>{
    const loggedUser = result.user;
    console.log(loggedUser);
  })
  .catch(error=>{
    console.log(error);
  })
}

if(user){
 return <Navigate to={'/'}></Navigate>
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
         
          </div> <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
          <div className="form-control mt-1">
             <button className="btn bg-sky-400 m-2 border-0" onClick={handleGoogleSignIn} ><Link> <span className='flex items-center gap-2'><FaGoogle></FaGoogle> Login with Google</span> </Link></button>
        </div>
        <div className="form-control mt-3">
             <button className="btn  m-2" ><Link> <span className='flex items-center gap-2'><FaGithub/> Login with Github</span> </Link></button>
        </div>

          <hr />
          <div className="form-control mt-3">
            <h2 className='text-center font-bold mb-2'>New here?</h2>
          <button className="btn btn-secondary m-2" ><Link to='/register'>Register</Link></button>
        </div>
          </div>
        </div>
      </div>
    );
};

export default Login;