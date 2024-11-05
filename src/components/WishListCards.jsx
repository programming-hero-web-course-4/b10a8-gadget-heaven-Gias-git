import React, { createContext, useEffect, useState } from 'react';
import DashBoardcartsingle from './DashBoardcartsingle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getwishLocalStoageData } from '../utilities/WishlistLocalStorage';



const WishListCards = () => {


    const [wishProducts, setWishProducts] = useState([]);
    useEffect(() => {
        const wishDataLocalStorage = JSON.parse(localStorage.getItem('wish-list'));
        console.log(wishDataLocalStorage)
        setWishProducts(wishDataLocalStorage || []);
    }, [])

    console.log(wishProducts)
    const handleDeleteProduct = (productId) => {
        console.log(productId)

        const wishItemsStored = getwishLocalStoageData();
        const reaminning = wishItemsStored.filter(proudct => proudct.product_id != productId);
        localStorage.setItem('wish-item', JSON.stringify(reaminning))
        setWishProducts(reaminning);

        toast.error('Delete Product Successfully')
    };





    return (

        <div className='w-8/12 mx-auto space-y-10'>


            {
                wishProducts.map(product => <DashBoardcartsingle wishProducts={wishProducts} handleDeleteProduct={handleDeleteProduct} key={product.product_id} product={product}></DashBoardcartsingle>)
            }
        </div>

    );
};

export default WishListCards;