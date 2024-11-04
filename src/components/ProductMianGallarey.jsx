import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from './Categories';

const ProductMianGallarey = () => {

    const categories = useLoaderData().categories;
    return (
        <div className='mx-auto pb-60 lg:px-10'>
            <h1 className='font-bold text-[40px] text-center'>Explore Cutting-Edge Gadgets</h1>

            <div className='flex flex-col lg:flex-row space-x-5 mt-10'>
                <div className='lg:w-2/12 '>
                    <Categories categories={categories}></Categories>
                </div>
                {/*   {category} */}

                {/* products  */}

                <div className='lg:w-10/12'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default ProductMianGallarey;