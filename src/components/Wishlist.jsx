import React from 'react';
import DashboardCard from './DashboardCard';
import WishListCards from './WishListCards';

const Wishlist = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold pl-10 mb-8'>Wish-List </h1>
            <WishListCards></WishListCards>
        </div>
    );
};

export default Wishlist;