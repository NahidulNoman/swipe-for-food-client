import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css';

const Services = () => {
    const [services , setServices] = useState([]);

    useEffect( () => {
        fetch('https://swipe-for-food-server.vercel.app/servicehome')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);

    return (
        <div className='services mx-auto'>
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;