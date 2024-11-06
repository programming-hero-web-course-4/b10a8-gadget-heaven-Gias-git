import React from 'react';
import Heading from '../components/Heading';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';



const Dashboard = () => {
    return (

        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>

            <div className='bg-[#9538E2] py-28 mb-4 flex flex-col  items-center space-y-11'>
                <Heading title='Dashboard' description='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>

                <div className=' flex gap-10'>
                    <Link to='/dashboard/cart'>  <button className='px-10 py-2 bg-white text-lg font-extrabold text-[#9538E2] rounded-3xl'>Cart</button></Link>

                    <Link to='/dashboard/wishlist'>
                        <button className='px-10 py-2 bg-white text-lg font-extrabold text-[#9538E2] rounded-3xl'>Wishlist</button>
                    </Link>

                </div>



            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>



    );
};

export default Dashboard;