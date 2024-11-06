import React, { createContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

import { getLocalStorageData } from '../utilities/Localstorage';
import { getwishLocalStoageData } from '../utilities/WishlistLocalStorage';

export const CardProductNumberContext = createContext(0);
export const CardWishNumberContext = createContext(0);





const MainLayouts = () => {

    const localCartData = getLocalStorageData().length;
    const localWishData = getwishLocalStoageData().length;

    const [cardProductNumber, setCardProductNumber] = useState(localCartData);
    const [WishProductNumber, setWishCardProductNumber] = useState(localWishData);
    return (
        <div className='font-sora flex flex-col min-h-screen'>

            <CardWishNumberContext.Provider value={[WishProductNumber, setWishCardProductNumber]}>
                <CardProductNumberContext.Provider value={[cardProductNumber, setCardProductNumber]}>
                    <Navbar />
                    <div className='flex-grow'>
                        <Outlet></Outlet>
                    </div>
                </CardProductNumberContext.Provider>

            </CardWishNumberContext.Provider>


            {/* navbar */}
            {/* <Navbar></Navbar> */}




            {/* Footer */}

            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;