import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className='flex items-center space-x-3'>
            <div>
                <img style={{borderRadius: '0 200px 200px 200px'}} className='w-28' src={image} alt="" />
            </div>
            <div>
                <h2 className='text-xl font-semibold uppercase'>{name}  ---------</h2>
                <p className='text-gray-500'>{recipe}</p>
            </div>
            <p className='text-yellow-600 text-xl'>${price}</p>
        </div>
    );
};

export default MenuItem;