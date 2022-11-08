import React from "react";
import { FaStar, FaArrowAltCircleRight } from "react-icons/fa";
import "./ser.css";

const Service = ({ service }) => {
  const { img, price, description, name, rating, deliveryTime } = service;

  return (
    <div className="card" style={{ maxWidth: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text mb-0 fw-semibold opacity-75">
          {description ? description.slice(0, 80) + "..." : "no description"}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-1 fw-bold opacity-75">
            <span className="price">Price :</span> {price} Tk
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-1 fw-bold opacity-75">
              <span className="rating">Rating :</span> {rating}{" "}
            </p>
            <p className="text-warning mb-2">
              <FaStar></FaStar>
            </p>
          </div>
        </div>
        <p className="mb-2 fw-bold opacity-75">
          <span className="time">Delivery Time :</span> {deliveryTime} minutes
        </p>
        <button type="button" className="btn btn-outline-primary fw-bold">
          Order Details <FaArrowAltCircleRight></FaArrowAltCircleRight>
        </button>
      </div>
    </div>
  );
};

export default Service;
