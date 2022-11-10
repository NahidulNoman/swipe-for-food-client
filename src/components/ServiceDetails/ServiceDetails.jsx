import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import ReviewForm from "../ReviewForm/ReviewForm";
import UserReview from "../UserReview/UserReview";

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);
  const serviceDetails = useLoaderData();
//   console.log(serviceDetails);
  const { img, description, name, price, deliveryTime, _id } = serviceDetails;

  return (
    <div className="container mt-5">
      <h3 className="text-center fw-bold m-5 fs-1">SERVICE <span className="text-success">DETAIL'S</span></h3>
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
      <h3 className="text-center fs-1 m-5">THIS SERVICE<span className="text-success"> CUSTOMER REVIEW</span></h3>
      <UserReview>{_id}</UserReview>
      {
        user?.email ? <ReviewForm>{_id}</ReviewForm> : <>
        <h3 className="text-center fw-bold m-5"> Please <Link to='/login'>login</Link> to add a review</h3>
        </>
      }
    </div>
  );
};

export default ServiceDetails;
