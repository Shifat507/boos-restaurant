import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaOpencart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import useCart from '../hooks/useCart';

const Navbar = () => {
    const [cart] = useCart();
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/ourMenu'>Our Menu</NavLink></li>
        <li><NavLink to='/orders/salad'>Our Shop</NavLink></li>
        <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
        {/* <li><NavLink to='/contactUs'>Lo</NavLink></li> */}
    </>
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log('Error :', err.message);
            })
    }
    return (
        <div>
            <div className="navbar max-w-7xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white ">
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
                    <a className="btn btn-ghost text-xl">Boos Res</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className='mr-2'>
                                <Link to='dashboard/cart'>
                                    <button className="flex items-center">
                                        <FaCartShopping size={20} />
                                        <div className="badge badge-secondary -mt-4 -ml-1">{cart.length}</div>
                                    </button>
                                </Link>
                            </div>
                            <button onClick={handleLogout} className='btn'>Logout</button>
                        </> : <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;