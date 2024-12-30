import React from 'react';
import MenuItem from './MenuItem';

const MenuItems = ({ items }) => {
    return (
        <div className='grid md:grid-cols-2 gap-10 w-10/12 mx-auto my-20'>
            {
                items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    );
};

export default MenuItems;