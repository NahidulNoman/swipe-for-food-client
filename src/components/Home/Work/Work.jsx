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
        <div class="card" style={{ maxWidth: "18rem" }}>
        <img src={dish} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Choose Your Favorite</h5>
          <p class="card-text">
            Choose your favorite meals and order online or by phone. It's easy
            to customize your order.
          </p>
        </div>
      </div>

      <div class="card" style={{ maxWidth: "18rem" }}>
        <img src={delivery} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">We Deliver Your Meals</h5>
          <p class="card-text">
            We prepared and delivered meals arrive at your door and your location.
          </p>
        </div>
      </div>

      <div class="card" style={{ maxWidth: "18rem" }}>
        <img src={enjoy} class="card-img-top bg-white" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Wait for delivery</h5>
          <p class="card-text">
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
