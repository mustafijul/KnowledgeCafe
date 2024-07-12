import React from 'react';

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='mt-8'>
            <div className='bg-slate-200 rounded-xl p-5 mx-2'>
            <h2>{title}</h2>

            </div>
            
        </div>
    );
};

export default BookMark;