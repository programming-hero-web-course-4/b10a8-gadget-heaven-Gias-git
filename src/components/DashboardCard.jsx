import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorageData } from '../utilities/Localstorage';
import DashBoardcartsingle from './DashBoardcartsingle';
import Navbar from './Navbar';




const DashboardCard = () => {

    const [cardProducts, setCardProducts] = useState([]);

    useEffect(() => {
        const cartsDataLocalStorage = JSON.parse(localStorage.getItem('cart-item'));
        setCardProducts(cartsDataLocalStorage || []);
    }, [])

    const handleDeleteProduct = (productId) => {

        const cartItemsStored = getLocalStorageData();
        const reaminning = cartItemsStored.filter(prudct => prudct.product_id != productId);
        localStorage.setItem('cart-item', JSON.stringify(reaminning))
        setCardProducts(reaminning);
    };



    return (

        <div className='w-8/12 mx-auto space-y-10'>
            {
                cardProducts.map(product => <DashBoardcartsingle handleDeleteProduct={handleDeleteProduct} key={product.product_id} product={product}></DashBoardcartsingle>)
            }
        </div>

    );
};

export default DashboardCard;