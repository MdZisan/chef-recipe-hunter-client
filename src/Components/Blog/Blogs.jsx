import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBlog from "./SingleBlog";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
  const blogs = useLoaderData();
  // console.log(blogs);

  return (
    <div className="text-center min-h-screen">
      <h1 className="text-3xl font-bold">ALL Blogs</h1>
      <div className="bg-green-400 md:w-[15%] mx-auto my-5 text-white p-4 rounded-xl">
      <Pdf targetRef={ref} filename="blogs.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download Blogs</button>}
      </Pdf>


      </div>

      <div ref={ref}   className="text-center mx-auto md:w-600px"   >
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
