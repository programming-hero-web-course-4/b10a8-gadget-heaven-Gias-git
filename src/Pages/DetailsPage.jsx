import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useActionData, useLoaderData, useParams } from 'react-router-dom';
import Heading from '../components/Heading';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { addTolocalStorage, getLocalStorageData } from '../utilities/Localstorage';
import { addWishListTolocalStorage, getwishLocalStoageData } from '../utilities/WishlistLocalStorage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { CardProductNumberContext, CardWishNumberContext } from '../Layouts/MainLayouts';




const DetailsPage = () => {

    // const asset = cardList.length;

    // <cartContext.Provider value='cartItemNumber'>
    //     <Cart asset={asset}></Cart>
    // </cartContext.Provider>


    const [cardProductNumber, setCardProductNumber] = useContext(CardProductNumberContext);
    const [WishProductNumber, setWishCardProductNumber] = useContext(CardWishNumberContext);


    const productData = useLoaderData();
    const { product_title } = useParams();

    const [detailData, setDetailsData] = useState({});

    const { product_image, category, price, description, Specification, availability, rating, product_id } = detailData || []


    const [isDisablecartBtn, setIsdisableCartBtn] = useState(false);
    const [isDisablewishBtn, setIsdisablewishtBtn] = useState(false);


    const handleAddToCard = (detailData) => {
        addTolocalStorage(detailData);
        setIsdisableCartBtn(true);
        toast.success('Product Add Cart Successfully')

        setCardProductNumber(getLocalStorageData().length)
    }

    const handlewishlist = (detailData) => {
        setIsdisablewishtBtn(true)
        addWishListTolocalStorage(detailData);
        toast.success('Product Add WishList Successfully')
        setWishCardProductNumber(getwishLocalStoageData().length)
    }





    useEffect((() => {
        const cardList = getLocalStorageData();
        const wishList = getwishLocalStoageData();
        const findProduct = productData.find(product => product.product_title == product_title);
        const isExist = cardList.find(item => item.product_id == findProduct.product_id);
        const isExistWish = wishList.find(item => item.product_id == findProduct.product_id);
        setDetailsData(findProduct)

        if (isExist) {
            setIsdisableCartBtn(true)
        }


        if (isExistWish) {
            setIsdisablewishtBtn(true)
        }



    }), [productData, product_title])
    return (
        <div className='bg-gray-100 pb-14 '>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className='bg-[#9538E2] py-28 mb-8'>
                <Heading title='Product Details' description='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
            </div>

            <div className="hero w-8/12 mx-auto bg-white -mt-28 mb-36 rounded-lg py-9">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src={product_image}
                        className="max-w-lg rounded-lg" />
                    <div className='space-y-4'>
                        <h1 className="text-2xl font-semibold ">{product_title}</h1>
                        <h1 className="text-lg font-semibold">Price: $ {price}</h1>
                        <p className="py-6 text-[#09080F99] text-lg">
                            {description}
                        </p>

                        {
                            availability ? <button className='bg-green-200 rounded-2xl text-green-600 px-3 py-2 text-sm'>In Stock</button> : <button className='bg-red-200 text-red-600 rounded-2xl px-3 py-2 text-sm'>Out Of stock</button>
                        }

                        <h1 className='text-lg font-bold'>Specification</h1>



                        {
                            Specification && Specification.map((item, i) => <li key={i}>{item}</li>)
                        }

                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>




                        <h1 className='font-bold'>Rating : <span className='text-red-600'> {rating} </span> </h1>



                        <div className='flex gap-10'>

                            <button

                                disabled={isDisablecartBtn}
                                className={`rounded-lg flex gap-4 justify-center items-center text-white text-2xl ${isDisablecartBtn ? 'bg-[#828283]' : 'bg-[#9538E2]'}  p-3`}
                                onClick={() => handleAddToCard(detailData)} >
                                <span className='text-lg'>Add To Card</span> <MdOutlineShoppingCart />  </button>

                            <button disabled={isDisablewishBtn} className={`rounded-full text-2xl border-2 ${isDisablewishBtn ? 'bg-[#dadadc]' : 'bg-[#ffffff]'}  p-3`} onClick={() => handlewishlist(detailData)} >
                                <CiHeart />
                            </button>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;