import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const  Blogs = ({handleAddBookmarks}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/public/Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
  }, []);

  console.log(blogs);
  return (
    <div className="md:w-2/3">
      <h2 className="text-4xl mb-8">Blogs</h2>
      {
        blogs.map(blog => <Blog handleAddBookmarks={handleAddBookmarks} key={blog.id} blog={blog}></Blog>)
      }
    </div>
  );
};

export default Blogs;
