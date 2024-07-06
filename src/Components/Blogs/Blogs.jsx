import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const  Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/public/Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log(blogs);
  return (
    <div className="md:w-2/3">
      <h2 className="text-4xl">Blogs</h2>
      {
        blogs.map(blog => <Blog key={blogs.id} blog={blog}></Blog>)
      }
    </div>
  );
};

export default Blogs;
