import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getwishLocalStoageData } from '../utilities/WishlistLocalStorage';
import WishListSinglecard from './WishListSinglecard';
import { CardWishNumberContext } from '../Layouts/MainLayouts';






const WishListCards = () => {


    useEffect(() => {
        const wishDataLocalStorage = JSON.parse(localStorage.getItem('wish-list'));
        setWishProducts(wishDataLocalStorage || []);
    }, [])

    const [wishProducts, setWishProducts] = useState([]);

    const [WishProductNumber, setWishCardProductNumber] = useContext(CardWishNumberContext);

    const handleWishDeleteProduct = (productId) => {

        const wishItemsStored = getwishLocalStoageData();
        const reaminning = wishItemsStored.filter(proudct => proudct.product_id != productId);
        localStorage.setItem('wish-list', JSON.stringify(reaminning))
        setWishProducts(reaminning);

        toast.error('Delete Product Successfully')
        setWishCardProductNumber(getwishLocalStoageData().length)

    };





    return (

        <div className='w-8/12 mx-auto space-y-10'>


            {
                wishProducts.map(product => <WishListSinglecard handleWishDeleteProduct={handleWishDeleteProduct} key={product.product_id} product={product}></WishListSinglecard>)
            }
        </div>

    );
};

export default WishListCards;