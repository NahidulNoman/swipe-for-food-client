import React from "react";

const Service = ({ service }) => {
  const { img, price, description, name, rating, deliveryTime } = service;

  return (
    <div className="card" style={{maxWidth: '18rem'}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
        {description? description.slice(0,80)+'...' : "no description"}
        </p>
        <div className="d-flex justify-content-between">
        <p>Price : {price} Tk</p>
        <p>Rating : {rating}</p>
        </div>
        <button type="button" className="btn btn-outline-secondary">Order Details</button>
      </div>
    </div>
  );
};

export default Service;
