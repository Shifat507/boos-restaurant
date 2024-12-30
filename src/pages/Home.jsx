import React from 'react';
import Banner from '../components/Banner';
import CategorySwiper from '../components/CategorySwiper';
import ShortTitle from '../components/ShortTile';
import SectionTile from '../components/sectionTile';
import PopularMenu from '../components/PopularMenu';
import Featured from '../components/Featured';
import Reviews from '../components/Reviews';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Boss | Home</title>
            </Helmet>
            {/* Banner */}
            <Banner></Banner>

            {/* Category */}
            <div className='w-10/12 mx-auto mb-20'>
                <SectionTile subtitle={'From 11:00am to 10:00pm'} title={'ORDER ONLINE'}></SectionTile>
                <CategorySwiper></CategorySwiper>
            </div>

            {/* Short Title */}
            <div className='my-24'>
                <ShortTitle></ShortTitle>
            </div>

            {/* Popular Menu */}
            <PopularMenu></PopularMenu>

            {/* Featured Section */}
            <Featured></Featured>

            {/* Testimonials */}
            <Reviews></Reviews>
        </div>
    );
};

export default Home;