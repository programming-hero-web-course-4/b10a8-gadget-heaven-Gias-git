import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLocalStorageData } from '../utilities/Localstorage';
import DashBoardcartsingle from './DashBoardcartsingle';
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardProductNumberContext } from '../Layouts/MainLayouts';
import popupImg from '../assets/Group.png'
import { useNavigate } from 'react-router-dom';

// import Modal from './Modal';




const DashboardCard = () => {

    const [cardProducts, setCardProducts] = useState([]);

    const [cardProductNumber, setCardProductNumber] = useContext(CardProductNumberContext);


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

    const handlePuchase = () => {

        localStorage.clear('cart-item')
        const getLocalStoragecart = getLocalStorageData();
        setCardProducts(getLocalStoragecart)
        setCardProductNumber(getLocalStoragecart.length)
    }
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/'); // Navigates to the '/home' route
    };



    return (

        <div className='px-10 space-y-9'>
            <div className='flex justify-between bg-gray-300 px-4 py-4 items-center rounded-lg'>
                <div><h1 className='text-3xl font-bold'>Card</h1></div>
                <div className='flex gap-8 items-center'>
                    <h1 className='text-3xl font-bold'>Total Cost : {cost} $ </h1>
                    <button onClick={() => { handleDecPrice(cardProducts) }} className='px-8 py-4 rounded-lg border-[#9538E2] border-2'>Sort By Price</button>
                    <span onClick={() => document.getElementById('my_modal_5').showModal()}> <button disabled={cost == 0 ? true : false} className={`px-8 py-4 text-white  rounded-lg ${cost == 0 ? 'bg-[#c3bec7]' : 'bg-[#9538E2]'} `}> Purchase</button></span>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">



                            <img className='w-10 mx-auto' src={popupImg} alt="" />


                            <h3 className="font-bold text-lg text-center mt-4">Payment Successfully!</h3>
                            <p className="py-2 text-center">Thanks For Purchasing</p>
                            <p className="py-1 text-center">Total: {cost}</p>




                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <div className=''>
                                        <span onClick={() => handlePuchase()} ><button onClick={() => goToHomePage()} className="btn w-full">Close</button> </span>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>
            <div className='w-8/12 mx-auto space-y-10'>
                {
                    cardProducts.map(product => <DashBoardcartsingle handleDeleteProduct={handleDeleteProduct} key={product.product_id} product={product}></DashBoardcartsingle>)
                }
            </div>

        </div>



    );
};

export default DashboardCard;