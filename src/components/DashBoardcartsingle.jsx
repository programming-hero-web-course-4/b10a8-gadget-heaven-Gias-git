import React, { useContext } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { CardProductNumberContext, CardWishNumberContext } from '../Layouts/MainLayouts';
import { getLocalStorageData } from '../utilities/Localstorage';
import { getwishLocalStoageData } from '../utilities/WishlistLocalStorage';

const DashBoardcartsingle = ({ product, handleDeleteProduct, wishProducts }) => {

    // location = 

    const [cardProductNumber, setCardProductNumber] = useContext(CardProductNumberContext);


    const { product_image, category, price, description, Specification, availability, rating, product_id, product_title } = product

    const handleCardProductNumber = () => {
        setCardProductNumber(getLocalStorageData().length - 1)

    }

  

    return (

        <div className='flex  items-center gap-10 border-2 rounded-lg py-4'>
            <div>
                <img className='w-40' src={product_image} alt="" />
            </div>

            <div className='space-y-3 flex-grow'>
                <h1>{product_title}</h1>
                <p>{description}</p>
                <p>Price: $ {price}</p>

                {wishProducts ? <button className='btn btn-ghost bg-gray-200'>Add To card</button> : ''}
            </div>
            <div className='flex justify-end px-16'>

                <button onClick={() => { handleDeleteProduct(product_id) }} className='text-3xl bg-red-500 rounded-full text-white '> <span onClick={() => handleCardProductNumber()}><RxCrossCircled /> </span>  </button>

            </div>
        </div>
    );
};

export default DashBoardcartsingle;