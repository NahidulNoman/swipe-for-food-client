import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bannerContainer mt-4'>
            <div className='text-container text-white'>
                <h2 className='display-3 fw-semibold'>Fastest <br /> <span className='delivery'>Delivery</span> & <br /> Easy <span className='easy'>PickUp</span></h2>
                <p className='fw-semibold opacity-75'>We deliver healthy food that are ready to eat.Just choose your <br /> own menu you like.</p>
                <Link to='/services'> <button className='btn btn-outline-primary text-white fw-semibold'>ORDER NOW <FaArrowAltCircleRight></FaArrowAltCircleRight></button></Link>
            </div>
        </div>
    );
};

export default Banner;