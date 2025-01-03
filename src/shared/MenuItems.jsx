import React from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

const MenuItems = ({ items, title }) => {
    return (
        <section>
            <div className='grid md:grid-cols-2 gap-10 w-10/12 mx-auto mt-20 mb-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>
            <div className='flex justify-center'>
                <Link to={`/orders/${title}`}>
                    <button className=' mt-2 mb-10 border-b-2 border-black uppercase'>Order Your Favorite Food</button>
                </Link>
            </div>
        </section>

    );
};

export default MenuItems;