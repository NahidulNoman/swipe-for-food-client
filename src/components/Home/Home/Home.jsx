import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/UseTitle";
import Banner from "../Banner/Banner";
import CustomerRating from "../CustomerRating/CustomerRating";
import Services from "../Services/Services";
import Work from "../Work/Work";

const Home = () => {
  useTitle('Home')
  return (
    <div className="container">
      <Banner></Banner>
      <h2 className="text-center mt-5 text-primary fw-bold">OUR FEATURED MENU</h2>
      <p className="text-center mb-5 fw-semibold opacity-75">
        Food from your favorite restaurants to your table. Just order and <br /> enjoy our delicious fresh food.
      </p>
      <Services></Services>
      <div className="text-center m-5 ">
        <Link to="/services">
          <button type="button" className="btn btn-primary fw-semibold">
            SEE ALL{" "}
          </button>
        </Link>
      </div>
      <Work></Work>
      <CustomerRating></CustomerRating>
    </div>
  );
};

export default Home;
