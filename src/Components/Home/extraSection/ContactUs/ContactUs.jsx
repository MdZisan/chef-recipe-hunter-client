import React from 'react';

const ContactUs = () => {
    return (
        <div className=' mt-8'>
       <div className='flex justify-center'>
       <div className="form-control">
  <h2 className='my-3 text-center text-xl font-bold'>Write your review or Questions</h2>
  <label className="input-group">
    <span className='bg-green-400  text-white'>Email</span>
    <input type="text" placeholder="Enter your email" className="input input-bordered bg-green-50" />
  </label>
</div>
       </div>

{/* text area */}
<div className='flex justify-center my-4'>
<textarea className=" textarea-success textarea textarea-bordered textarea-lg w-full max-w-xs" placeholder="Bio"></textarea>
</div>
<div className='flex justify-center'>
<button className="btn btn-success text-white">Submit</button>
</div>



        </div>
    );
};

export default ContactUs;