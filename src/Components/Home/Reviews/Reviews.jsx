import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('./reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])


    return (
        <div className='mb-6'>
            <h1 className="text-center text-3xl font-bold">Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
                {
                    reviews.map(review => <SingleReview review={review}></SingleReview>)
                }
               
            </div>
        </div>
    );
};

export default Reviews;