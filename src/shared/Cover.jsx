import React from 'react';
import { Parallax, Background } from 'react-parallax';


const Cover = ({ image, title, description }) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div>
            <div className="hero h-[450px]">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="hero-overlay md:px-64 md:py-16">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                           {description}
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;