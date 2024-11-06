import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLocalStorageData } from '../utilities/Localstorage';
import DashBoardcartsingle from './DashBoardcartsingle';
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Modal from './Modal';




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

        toast.error('Delete Product Successfully')
    };



    const [cost, setCost] = useState([]);
    useEffect(() => {

        const priceArray = [];
        {
            cardProducts.map(cardProduct => priceArray.push(cardProduct.price))
        }

        console.log(priceArray)

        const sum = priceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        setCost(parseInt(sum))

    },)

    const handleDecPrice = (cardProducts) => {
        console.log(cardProducts)
        const sortProducts = [...cardProducts].sort((a, b) => b.price - a.price);
        setCardProducts(sortProducts);
    };

    // const [modalActive, setModalActive] = useState(false);

    // const handlePuchase = () => {
    //     setModalActive(true)

    //     modalActive &&
    //         <div className="modal-box">
    //             <h3 className="font-bold text-lg">Hello!</h3>
    //             <p className="py-4">Press ESC key or click the button below to close</p>
    //             <div className="modal-action">
    //                 <form method="dialog">
    //                     {/* if there is a button in form, it will close the modal */}
    //                     <button className="btn">Close</button>
    //                 </form>
    //             </div>
    //         </div>
    // }

    return (

        <div className='px-10 space-y-9'>
            <div className='flex justify-between bg-gray-300 px-4 py-4 items-center rounded-lg'>
                <div><h1 className='text-3xl font-bold'>Card</h1></div>
                <div className='flex gap-8 items-center'>
                    <h1 className='text-3xl font-bold'>Total Cost : {cost} $ </h1>
                    <button onClick={() => { handleDecPrice(cardProducts) }} className='px-8 py-4 rounded-lg border-[#9538E2] border-2'>Sort By Price</button>
                    <button disabled={cost==0? true: false}  onClick={() => handlePuchase(cardProducts)} className={`px-8 py-4 text-white  rounded-lg ${cost == 0? 'bg-[#c3bec7]': 'bg-[#9538E2]'} `}>Purchase</button>
                </div>
            </div>
            <div className='w-8/12 mx-auto space-y-10'>
                {
                    cardProducts.map(product => <DashBoardcartsingle handleDeleteProduct={handleDeleteProduct} key={product.product_id} product={product}></DashBoardcartsingle>)
                }
            </div>

            <div>

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>



    );
};

export default DashboardCard;