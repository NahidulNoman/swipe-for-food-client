import React from "react";
import delivery from "../../asset/illustration-1.png";
import dish from "../../asset/illustration-2.png";
import enjoy from "../../asset/illustration-3.png";
import "./work.css";

const Work = () => {
  return (
    <div>
      <h2 className="mt-5 text-center">
        HOW YOU <span className="text-warning">ORDER</span> FOOD'S
      </h2>
      <p className="text-center fw-semibold opacity-75 mb-5">
        If you want to order something using <br /> swipe for food app. You just
        simply <br />
        three step following under below.
      </p>
      <div className="workSection">
        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src={dish} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold wait">Choose Your Favorite</h5>
            <p className="card-text fw-semibold opacity-75">
              Choose your favorite meals and order online or by phone. It's easy
              to customize your order.
            </p>
          </div>
        </div>

        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src={delivery} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold wait">
              Deliver Your Location
            </h5>
            <p className="card-text fw-semibold opacity-75">
              Prepared and delivered meals arrive at your door and your
              location.
            </p>
          </div>
        </div>

        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src={enjoy} className="card-img-top bg-white" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold wait">Wait for delivery</h5>
            <p className="card-text fw-semibold opacity-75">
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
