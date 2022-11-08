import React from "react";
import customer from "../../asset/customer.png";
import {
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaStarHalfAlt,
  FaUserCircle,
} from "react-icons/fa";

const CustomerRating = () => {
  return (
    <div>
        <h3 className="text-center m-5">About Us</h3>
      <div className="row mt-5 flex-column flex-lg-row">
        <div className="col-lg-6 col-sm-12">
          <h3 className="display-4 fw-semibold">
            What customers <br /> say about us
          </h3>
          <h5>
            <FaUserCircle></FaUserCircle> Syed Mohammad Noman
          </h5>
          <p>
            It is easy enough to use and has a lot of options. The only negative
            for me really is you can hardly customize some individual items
            (like if I want to add extra mayo or something). So many times it's
            not an option. Also, I can never choose to add extra dipping sauce
            or ask for extra forks and plates. So not the biggest deal, but
            still irritating. <br />
            <span className="text-warning">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
            </span>
            <span className="ms-2"> November 4, 2022</span>
          </p>
          <span className="m-3">
            <FaArrowLeft></FaArrowLeft>
          </span>
          <span>
            <FaArrowRight></FaArrowRight>
          </span>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={customer} className="img-fluid  w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
