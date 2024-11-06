import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { CardProductNumberContext, CardWishNumberContext } from "../Layouts/MainLayouts";







const Navbar = () => {


    const [cardProducts, setCardProducts] = useState([]);

    const [cardProductNumber, setCardProductNumber] = useContext(CardProductNumberContext);
    const[WishProductNumber, setWishCardProductNumber] = useContext(CardWishNumberContext);

    console.log(cardProductNumber)

    useEffect(() => {
        const cartsDataLocalStorage = JSON.parse(localStorage.getItem('cart-item'));
        // console.log(cartsDataLocalStorage)
        setCardProducts(cartsDataLocalStorage)
    }, [])


    const location = useLocation();

    let path = location.pathname;
    const links = <>
        <NavLink className={({ isActive }) =>
            isActive ? 'bg-white rounded-lg text-white'
                : ''
        } to='/'><span className={` ${path == '/' ? 'text-[#9538E2]' : 'text-[#9538E2]'}  text-base px-4`}>Home</span></NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'bg-slate-300 rounded-lg text-white'
                : ''
        } to='/dashboard'><span className={` ${path == '/' ? 'text-[white]' : 'text-[#9538E2]'}  text-base px-4 `}>Dashboard</span></NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'bg-slate-300 rounded-lg text-white'
                : ''
        } to='/stats'><span className={` ${path == '/' ? 'text-[white]' : 'text-[#9538E2]'} text-base  px-4 py-5`}>Stats</span></NavLink>

        <NavLink className={({ isActive }) =>
            isActive ? 'bg-slate-300 rounded-lg text-white'
                : ''
        } to='/posts'><span className={` ${path == '/' ? 'text-[white]' : 'text-[#9538E2]'} text-base  px-4 py-5`}>Posts</span></NavLink>
    </>


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

                    <Link to='/dashboard/cart' className="rounded-full flex relative text-2xl bg-white p-3"><MdOutlineShoppingCart /> <div className="absolute -top-2 bg-red-400 rounded-full -right-2 px-2 py-1 text-sm ">{cardProductNumber} </div> </Link>
                    <Link to='/dashboard/wishlist' className="rounded-full relative text-2xl bg-white p-3"><CiHeart />
                        <div className="absolute -top-2 bg-red-400 rounded-full -right-2 px-2 py-1 text-sm ">{WishProductNumber}  </div>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Navbar;