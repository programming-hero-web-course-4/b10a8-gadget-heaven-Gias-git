import React from 'react';

import Banner from '../components/Banner';
import ProductMianGallarey from '../components/ProductMianGallarey';
import { Helmet } from 'react-helmet';




const Home = () => {
    return (
        <div className='bg-gray-100 container mx-auto px-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Banner></Banner>
            <ProductMianGallarey></ProductMianGallarey>

        </div>

    );
};

export default Home;