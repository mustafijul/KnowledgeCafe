import React from 'react';

const Blog = ({blog}) => {
    // console.log(blog);
    const {title, cover_img ,author, author_img, reading_time} = blog;
    return (
        <div>
            <img src={cover_img} alt="" srcset="" />
            <div className='flex justify-between'>
                <div>

                </div>
                <div>

                </div>
            </div>
            <h2>{title}</h2>
        </div>
    );
};

export default Blog;