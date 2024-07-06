import React from 'react';

const Blog = ({blog}) => {
    // console.log(blog);
    const {title, cover_img} = blog;
    return (
        <div>
            <h2>{title}</h2>
            <img src={cover_img} alt="" srcset="" />
        </div>
    );
};

export default Blog;