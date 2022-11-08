import React from "react";
import delivery from "../../asset/illustration-1.png";
import dish from "../../asset/illustration-2.png";
import enjoy from "../../asset/illustration-3.png";
import './work.css';

const Work = () => {
  return (
    <div>
      <h2 className="m-5 text-center">How we Works for Delivery</h2>
        <div className="workSection">
        <div className="card" style={{ maxWidth: "18rem" }}>
        <img src={dish} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Choose Your Favorite</h5>
          <p className="card-text">
            Choose your favorite meals and order online or by phone. It's easy
            to customize your order.
          </p>
        </div>
      </div>

      <div className="card" style={{ maxWidth: "18rem" }}>
        <img src={delivery} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">We Deliver Your Meals</h5>
          <p className="card-text">
            We prepared and delivered meals arrive at your door and your location.
          </p>
        </div>
      </div>

      <div className="card" style={{ maxWidth: "18rem" }}>
        <img src={enjoy} className="card-img-top bg-white" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Wait for delivery</h5>
          <p className="card-text">
            No shopping, no cooking, no counting and no cleaning. Enjoy your
            healthy meals with your family.
          </p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Work;
