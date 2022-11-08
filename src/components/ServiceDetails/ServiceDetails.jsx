import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import UserReview from "../UserReview/UserReview";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
//   console.log(serviceDetails);
  const { img, description, name, price, deliveryTime, _id } = serviceDetails;

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-lg-6 col-sm-12">
          <img
            src={img}
            className="w-75 img-fluid shadow-lg rounded-3"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-sm-12 mt-5">
          <h3 className="fw-bold">{name} 🍽</h3>
          <p className="fw-semibold opacity-75">{description}</p>
          <p className="fw-bold ">
            <span className="text-danger">Delivery Time :</span> {deliveryTime}
          </p>
          <p className="fw-bold">
            <span className="text-success ">Price :</span> {price} Tk
          </p>
        </div>
      </div>
      <UserReview>{_id}</UserReview>
      <ReviewForm>{_id}</ReviewForm>
    </div>
  );
};

export default ServiceDetails;
