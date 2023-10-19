import React from 'react';

const LikedItemCard = ({item}) => {
    const {recipe_name, rating, food_img} = item;
    return (
        <div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto h-72">
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{rating}</p>
  </div>
  <figure><img src={food_img} alt="Food" className=''/></figure>
</div>
        </div>
    );
};

export default LikedItemCard;