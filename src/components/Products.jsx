import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Products = () => {

    const obj = useParams();

    const productsData = useLoaderData();

    const [categoryProducts, setCategoryProducts] = useState([]);





    useEffect((() => {


        if (obj.category =='AllProduct') {
             setCategoryProducts([...productsData]);
        } else if (obj.category){
            const filterCategoryProduct = [...productsData].filter(product => product.category === obj.category);
             setCategoryProducts(filterCategoryProduct);
        }else{
            setCategoryProducts([...productsData])
        }

    }), [productsData, obj])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                categoryProducts.map(product => <Product key={product.product_id} product={product}></Product>)

            }
        </div>
    );
};

export default Products;