import React from 'react';
import Banner from '../components/Banner';
import CategorySwiper from '../components/CategorySwiper';
import ShortTitle from '../components/ShortTitle';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Category */}
            <div className='w-10/12 mx-auto mb-20'>
                <div className='text-center mt-20 mb-10'>
                    <p className='text-yellow-600'>---From 11:00am to 10:00pm---</p>
                    <h2 className='text-4xl font-bold'>ORDER ONLINE</h2>
                </div>
                <CategorySwiper></CategorySwiper>
            </div>

            {/* Short Title */}
            <div className='my-24'>
                <ShortTitle></ShortTitle>
            </div>
        </div>
    );
};

export default Home;