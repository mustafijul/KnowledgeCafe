import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddBookmarks = (blog) => {
    console.log(blog);
  };
  return (
    <div>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
};

export default App;
