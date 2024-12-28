import React from 'react';
import bgImg from '../assets/home/chef-service.jpg'

const ShortTitle = () => {
    return (
        <div
            className="hero min-h-96"
            style={{
                backgroundImage: `url(${bgImg})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-center bg-white text-black md:px-48 md:py-6 rounded-lg">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-semibold">Bistro Boss</h1>
                    <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShortTitle;