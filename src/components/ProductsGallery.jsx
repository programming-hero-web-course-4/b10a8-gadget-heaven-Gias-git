import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsGallery = () => {

    const data = useLoaderData();
    console.log(data)
    return (
        <div className='mx-auto'>
            <h1 className='font-bold text-[40px] text-center'>Explore Cutting-Edge Gadgets</h1>

            <div>
                {/*   {category} */}
                {data}
                {/* products  */}
            </div>
        </div>
    );
};

export default ProductsGallery;