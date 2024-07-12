import React from 'react';
import BookMark from '../BookMark/BookMark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 text-center ml-4 pt-3'>
            <h2 className='text-3xl'>Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <BookMark bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

export default Bookmarks;