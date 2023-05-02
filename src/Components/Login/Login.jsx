import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
         
          </div> <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form>
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