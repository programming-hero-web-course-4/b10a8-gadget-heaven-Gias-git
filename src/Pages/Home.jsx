import React from 'react';

import Banner from '../components/Banner';
import ProductMianGallarey from '../components/ProductMianGallarey';




const Home = () => {
    return (
        <div className='bg-gray-100 container mx-auto px-10'>
            <Banner></Banner>
            <ProductMianGallarey></ProductMianGallarey>

        </div>

    );
};

export default Home;