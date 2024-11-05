import React from 'react';
import { RxCrossCircled } from "react-icons/rx";

const DashBoardcartsingle = ({ product, handleDeleteProduct }) => {

    const { product_image, category, price, description, Specification, availability, rating, product_id, product_title } = product
    return (
        <div className='flex  items-center gap-10 border-2 rounded-lg'>
            <div>
                <img className='w-40' src={product_image} alt="" />
            </div>

            <div className='space-y-3 flex-grow'>
                <h1>{product_title}</h1>
                <p>{description}</p>
                <p>Price: $ {price}</p>
            </div>
            <div className='flex justify-end px-16'>
                <button onClick={()=>handleDeleteProduct(product_id)} className='text-3xl bg-red-500 rounded-full text-white '><RxCrossCircled /></button>
            </div>
        </div>
    );
};

export default DashBoardcartsingle;