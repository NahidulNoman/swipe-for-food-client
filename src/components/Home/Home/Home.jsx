import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Services></Services>
            <div className='text-center m-5 '>
            <button type="button" class="btn btn-primary ">See All</button>
            </div>
        </div>
    );
};

export default Home;