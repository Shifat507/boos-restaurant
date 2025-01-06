import React from 'react';
import { FaHome, FaCalendarAlt, FaHistory, FaShoppingCart, FaStar, FaBook, FaUsers, FaListUl } from "react-icons/fa";
import { GiShoppingBag } from 'react-icons/gi';
import { IoIosMenu } from 'react-icons/io';
import { MdRestaurant } from 'react-icons/md';
import { RiMenuSearchFill, RiMessageFill } from 'react-icons/ri';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:min-h-screen'>
                <ul className="menu bg-orange-400 text-base-content min-h-full md:w-64 p-4 pt-10">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome' className='flex items-center gap-3 text-lg font-semibold'> <FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems' className='flex items-center gap-3 text-lg font-semibold'> <MdRestaurant /> Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems' className='flex items-center gap-3 text-lg font-semibold'> <FaListUl /> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/bookings' className='flex items-center gap-3 text-lg font-semibold'> <FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/users' className='flex items-center gap-3 text-lg font-semibold'> <FaUsers /> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to='/dashboard/userHome' className='flex items-center gap-3 text-lg font-semibold'> <FaHome /> Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation' className='flex items-center gap-3 text-lg font-semibold'> <FaCalendarAlt /> Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/paymentHistory' className='flex items-center gap-3 text-lg font-semibold'> <FaHistory /> Payment history</NavLink></li>
                            <li><NavLink to='/dashboard/cart' className='flex items-center gap-3 text-lg font-semibold'> <FaShoppingCart /> My Cart</NavLink></li>
                            <li><NavLink to='/dashboard/review' className='flex items-center gap-3 text-lg font-semibold'> <FaStar /> Add Review</NavLink></li>
                            <li><NavLink to='/dashboard/myBooking' className='flex items-center gap-3 text-lg font-semibold'> <FaBook /> My Booking</NavLink></li>
                        </>
                    }

                    {/* shared menu */}
                    {/* divider */}

                    <div className="divider"></div>
                    <li><NavLink to='/' className='flex items-center gap-3 text-lg font-semibold'> <FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu' className='flex items-center gap-3 text-lg font-semibold'> <IoIosMenu /> Menu</NavLink></li>
                    <li><NavLink to='/shop' className='flex items-center gap-3 text-lg font-semibold'><GiShoppingBag /> Shop</NavLink></li>
                    <li><NavLink to='/shop' className='flex items-center gap-3 text-lg font-semibold'><RiMessageFill /> Contact</NavLink></li>

                </ul>
            </div>
            <div className='flex-1'>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;