import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";




const Navbar = () => {

    const location = useLocation();

    let path = location.pathname;
    const links = <>
        <NavLink to='/'><span className={` ${path == '/' ? 'text-[white]' : 'text-[#9538E2]'}  text-base `}>Home</span></NavLink>
        <NavLink to='/dashboard'><span className={` ${path == '/' ? 'text-[white]' : 'text-[#9538E2]'}  text-base `}>Dashboard</span></NavLink>
    </>

   

    const getcardProduct = localStorage.getItem('product-id');

    const getcardProductparse = JSON.parse(getcardProduct);

    const [cardItem, setCardItem] = useState(getcardProductparse);

    const getWishListItem = localStorage.getItem('wish-list');

    const getwishProductparse = JSON.parse(getWishListItem);

    const [wishItem, setWishItem] = useState(getwishProductparse);






    return (

        <div className=" mx-10">

            <div className={`navbar ${path == '/' ? 'bg-[#9538E2]' : 'bg-white'}  mt-5 rounded-t-lg py-4 px-16`}>


                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link className={` ${path == '/' ? 'text-[white]' : 'text-[#9538E2]'}  text-xl font-bold`}>Gadget Heaven</Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-7">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">

                    <Link to='/dashboard/cart' className="rounded-full flex relative text-2xl bg-white p-3"><MdOutlineShoppingCart /> <div className="absolute -top-2 bg-red-400 rounded-full -right-2 px-2 py-1 text-sm "> {cardItem? cardItem.length: '0'}  </div></Link>
                    <Link to='/dashboard/wishlist' className="rounded-full relative text-2xl bg-white p-3"><CiHeart />
                    <div className="absolute -top-2 bg-red-400 rounded-full -right-2 px-2 py-1 text-sm "> {wishItem? wishItem.length: '0'}  </div>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Navbar;