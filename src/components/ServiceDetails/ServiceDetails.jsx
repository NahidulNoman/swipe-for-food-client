import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails);
    const {img,description,name,price,deliveryTime,_id} = serviceDetails;
    return (
        <div className='container mt-5'>
            <div className='row'>
            <div className='col-lg-6 col-sm-12'>
                <img src={img} className='w-75 img-fluid shadow-lg rounded-3' alt="" />
            </div>
            <div className='col-lg-6 col-sm-12 mt-5'>
                <h3 className='fw-bold'>{name} 🍽</h3>
                <p className='fw-semibold opacity-75'>{description}</p>
                <p className='fw-bold '><span className='text-danger'>Delivery Time :</span> {deliveryTime}</p>
                <p className='fw-bold'><span className='text-success '>Price :</span> {price} Tk</p>
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;