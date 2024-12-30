import React from 'react';

const SectionTile = ({subtitle, title}) => {
    return (

        <div className='text-center mt-20 mb-10'>
            <p className='text-yellow-600 mb-3'>---{subtitle}---</p>
            <span className='text-4xl font-bold uppercase border-y-2 border-gray-600'>{title}</span>
        </div>

    );
};

export default SectionTile;