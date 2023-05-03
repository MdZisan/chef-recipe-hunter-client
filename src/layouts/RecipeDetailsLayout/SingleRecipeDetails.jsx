import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleRecipeDetails = () => {
const navigate =  useNavigate()
    const back = ()=>{

navigate(-1)

    }


    const details = useLoaderData()
    console.log(details);

    return (
        <div>

            <button onClick={back} className='btn '>Go back</button>
            <h2>recipe details</h2>
        </div>
    );
};

export default SingleRecipeDetails;