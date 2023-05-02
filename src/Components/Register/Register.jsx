import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
         
          </div> <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form>
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name='name'  required placeholder="name" className="input input-bordered" />
              </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name='photo'  required placeholder="Photo Url" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" required placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" required placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </form>
          <hr />
          <div className="form-control mt-3">
            <h2 className='text-center font-bold mb-2'>Already have an account?</h2>
          <button className="btn btn-secondary m-2" ><Link to='/login'>Log in</Link></button>
        </div>
          </div>
        </div>
      </div>
    );
};

export default Register;