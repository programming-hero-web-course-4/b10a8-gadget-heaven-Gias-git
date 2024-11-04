import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const {product_title,product_image,category,price,product_id} = product
    
    return (
        <div>
            <div className="card card-compact bg-base-100 h-96 p-5 flex flex-col">
                <figure className='flex-grow'>
                    <img className='rounded-2xl max-w-48 '
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/detailspage/${product_title}`} > <button className="px-5 py-3 border-2 border-[#9538E2] rounded-2xl text-[#9538E2]">View Details</button> </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;