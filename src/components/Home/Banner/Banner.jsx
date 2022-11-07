import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bannerContainer mt-4'>
            <div className='text-container'>
                <h2>Fast Food <br /> and <br /> Easy Pick Up</h2>
                <button className='btn btn-primary'>order now</button>
            </div>
        </div>
    );
};

export default Banner;