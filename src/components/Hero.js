import React from 'react';

const Hero = ({ text, subtext }) => {
    return (
        <>
            <div className="hero my-4 py-3 text-center rounded">
                <h1 className='fw-bold display-1'>{text} <span className='searching'>{subtext}</span></h1>
            </div>
        </>
    );
};

export default Hero;