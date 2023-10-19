import React from 'react';

const SingleFaq = ({faq}) => {
    const {question,answer} = faq;
    return (
        <div className="collapse  collapse-arrow border border-[#4ade80] rounded-lg mb-2 ">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    {question}
  </div>
  <div className="collapse-content"> 
    <p>
        {answer}
    </p>
  </div>
</div>
    );
};

export default SingleFaq;