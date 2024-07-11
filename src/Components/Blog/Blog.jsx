import React from "react";
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({ blog, handleAddBookmarks }) => {
  // console.log(blog);
  const {
    title,
    cover_img,
    author,
    author_image,
    reading_time,
    posted_date,
    hashtag,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover_img} alt="" srcset="" />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-16" src={author_image} alt="" />
          <div className="ml-4">
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddBookmarks(blog)} className="ml-2 text-yellow-500 text-2xl"><IoBookmarkSharp></IoBookmarkSharp></button>
        </div>
      </div>
      <h2 className="text-6xl">{title}</h2>
      <p>{hashtag}</p>
    </div>
  );
};

export default Blog;
