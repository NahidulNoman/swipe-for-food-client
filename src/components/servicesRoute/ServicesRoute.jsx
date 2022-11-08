import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Home/Service/Service';
import './serviceRoute.css';

const ServicesRoute = () => {
    const servicesRoute = useLoaderData();
    console.log(servicesRoute);
    // d-flex flex-column flex-lg-row
    return (
        <div>
            <h3 className='text-center m-5 text-primary'>MENU CATEGORIES</h3>
            <div className='serviceRoute container mt-5 mb-5 '>
            {
                servicesRoute.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default ServicesRoute;