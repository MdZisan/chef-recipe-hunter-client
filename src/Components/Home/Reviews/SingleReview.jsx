import React from 'react';
import ReactStars from "react-rating-stars-component";
const SingleReview = ({review}) => {
   const {author_name,author_email,author_photo,rating,review_text}= review;
   console.log(review);
//    const ratings = {
//     size: 30, 
//     value: 3,
//     edit: false
//     };  
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={author_photo} />
  </div>
</div>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{author_name}</h2>
    <ReactStars  count={5}
   edit={false}
   value={rating}
    size={24}
    activeColor="#ffd700"/>
    <p className='text-blue-300'><a href={`mailto:${author_email}`}>{author_email}</a> </p>
    <p>{review_text}</p>
    {/* <div className="card-actions">
      <button className="btn bg-[#36d399] border-0">Buy Now</button>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default SingleReview;