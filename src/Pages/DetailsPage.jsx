import React, { useEffect, useState } from 'react';
import { Link, useActionData, useLoaderData, useParams } from 'react-router-dom';
import Heading from '../components/Heading';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { addTolocalStorage } from '../utilities/Localstorage';
import { addWishListTolocalStorage } from '../utilities/WishlistLocalStorage';



const DetailsPage = () => {


    const [iscartdisabbled, setIscartdisabled] = useState(false)



    const productData = useLoaderData();
    const { product_title } = useParams();

    const [detailData, setDetailsData] = useState({});

    const { product_image, category, price, description, Specification, availability, rating, product_id } = detailData




    const handleAddToCard = (productId) => {

        addTolocalStorage(productId);
        // setIscartdisabled(true);
    }
  
    const handlewishlist = (productId) => {

        addWishListTolocalStorage(productId)
    }



    useEffect((() => {

        const findProduct = productData.find(product => product.product_title == product_title);
        setDetailsData(findProduct)

    }), [productData, product_title])
    return (
        <div className='bg-gray-100 pb-14 '>
            <div className='bg-[#9538E2] py-28 mb-8'>
                <Heading title='Product Details' description='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
            </div>

            <div className="hero w-8/12 mx-auto bg-white -mt-28 mb-36 rounded-lg py-9">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg" />
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

                        <div>
                            {Specification}
                        </div>



                        <div className='flex gap-10'>

                            <button  disabled={iscartdisabbled} onClick={() => handleAddToCard(product_id)} >
                                <Link className="rounded-lg flex gap-4 justify-center items-center text-white text-2xl bg-[#9538E2] p-3">  <span className='text-lg'>Add To Card</span> <MdOutlineShoppingCart /> </Link> </button>

                            <Link onClick={() => handlewishlist(product_id)} className="rounded-full text-2xl border-2 bg-white p-3"><CiHeart /></Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;