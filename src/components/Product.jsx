import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const {product_title,product_image,category,price,product_id} = product
    
    return (
        <div>
            <div className="card card-compact bg-base-100 p-5 ">
                <figure>
                    <img className='rounded-2xl'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-start">
                        <Link to={`detailspage/${product_title}`} > <button className="px-5 py-3 border-2 border-[#9538E2] rounded-2xl text-[#9538E2]">View Details</button> </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;