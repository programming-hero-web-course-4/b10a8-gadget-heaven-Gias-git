import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";


const Navbar = () => {
    const links = <>
        <NavLink to='/'><span className="text-white">Home</span></NavLink>
        <NavLink to='/dashboard'><span className="text-white">Dashboard</span></NavLink>
    </>

    return (
        <div className="navbar bg-[#9538E2] mt-5 rounded-t-lg py-4 px-16 mx-auto">
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
                <Link className="text-white text-xl">Gadget Heaven</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-7">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">

                <Link className="rounded-full text-2xl bg-white p-3"><MdOutlineShoppingCart /></Link>
                <Link className="rounded-full text-2xl bg-white p-3"><CiHeart /></Link>
              
            </div>
        </div>
    );
};

export default Navbar;