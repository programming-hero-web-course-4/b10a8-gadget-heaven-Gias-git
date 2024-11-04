import React from 'react';

const Heading = ({ title, description }) => {
    return (
        <div className='space-y-6'>
            <h1 className='text-4xl font-bold text-white text-center'>{title}</h1>
            <p className='text-white text-center w-8/12 mx-auto'>{description}</p>
        </div>
    );
};

export default Heading;