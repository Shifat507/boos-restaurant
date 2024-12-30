import React from 'react';
import featuredImg from '../assets/home/featured.jpg'
import SectionTile from './sectionTile';
const Featured = () => {
    return (
        <div
            className="hero min-h-60 bg-fixed mb-24"
            style={{ backgroundImage: `url(${featuredImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <div className=''>
                        <SectionTile subtitle={'Check it out'} title={'FROM OUR MENU'}></SectionTile>
                    </div>
                    <div className='md:flex items-center gap-4 px-20 pt-5 pb-16'>
                        <div>
                            <img src={featuredImg} alt="" />
                        </div>
                        <div>
                            <p>Dec 30, 2024</p>
                            <h3>Where can I get some?</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium deleniti in necessitatibus voluptatum quidem modi beatae qui culpa quaerat reprehenderit, odit, sequi minima illum natus, commodi asperiores numquam obcaecati distinctio.</p>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;