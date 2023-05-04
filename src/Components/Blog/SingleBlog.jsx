import React from "react";

const SingleBlog = ({ blog }) => {
  const { question, answer } = blog;

  return (
    <>
     
        <div className="px-6">
          <div className="mockup-window border bg-green-300 my-3">
            <div className="flex justify-center px-4 py-4 text-2xl font-bold bg-green-200">
              {question}
            </div>
            <div className="flex justify-center px-4 py-4 text-xl bg-green-200">
              {answer}
            </div>
          </div>
        </div>
      
    </>
  );
};

export default SingleBlog;
