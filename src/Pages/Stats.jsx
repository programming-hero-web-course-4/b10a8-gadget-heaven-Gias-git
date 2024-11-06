import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import Heading from '../components/Heading';

const Stats = () => {
    const data = useLoaderData();

    return (
        <div className='w-full '>
            <div className='bg-[#9538E2] py-28 mb-8'>
                <Heading title='Product Stats' description='Product Vs Price chart'></Heading>
            </div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Stats</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>

            <div className='px-28'>
                <LineChart width={1200} height={600} data={data}>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <XAxis dataKey="product_id" />
                    <YAxis />
                </LineChart>
            </div>


        </div>
    );
};

export default Stats;