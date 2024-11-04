import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../components/Heading';

const DetailsPage = () => {

    const productData = useLoaderData();
    const { product_title } = useParams();

    const [detailData, setDetailsData] = useState({});

    const { product_image, category, price, description, Specification } = detailData

    useEffect((() => {

        const findProduct = productData.find(product => product.product_title == product_title);
        setDetailsData(findProduct)

    }), [productData, product_title])
    return (
        <div className='bg-gray-100'>
            <div className='bg-[#9538E2] py-36'>
                <Heading title='Product Details' description='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
            </div>

            <div className="hero w-8/12 mx-auto bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-semibold">{product_title}</h1>
                        <h1 className="text-lg font-semibold">Price: $ {price}</h1>
                        <p className="py-6">
                            {description}
                        </p>

                        <h1>Specification</h1>

                        <ol>
                            {Specification}
                        </ol>



                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;