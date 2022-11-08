import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bannerContainer mt-4'>
            <div className='text-container text-white'>
                <h2 className='display-3'>Fastest <br /> Delivery & <br /> Easy PickUp</h2>
                <p>We deliver healthy food that are ready to eat.Just choose your <br /> own menu you like.</p>
                <button className='btn btn-primary'>ORDER NOW</button>
            </div>
        </div>
    );
};

export default Banner;