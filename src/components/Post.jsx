import React from 'react';

const Post = ({ post }) => {
    return (
        <div className='border-2 rounded-lg px-4 py-4'>
            <h1 className='text-2xl font-bold mb-6'>{post.title}</h1>
            <hr />
            <p className='mt-5'>{post.description}</p>
        </div>
    );
};

export default Post;