import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails);
    return (
        <div>
            <h3>this is service details page.</h3>
        </div>
    );
};

export default ServiceDetails;