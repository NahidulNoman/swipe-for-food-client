import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../Home/Service/Service";
import useTitle from "../hooks/UseTitle";
import "./serviceRoute.css";

const ServicesRoute = () => {
  useTitle("Services");
  const [serviceData, setServiceData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://swipe-for-food-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data)
        setLoader(false)
      });
  }, []);
  // console.log(servicesRoute);
  // console.log(servicesRoute.length)
  // if (loader) {
  //   return (
  // <div className="text-center">
  //   <div className="spinner-border mt-5" role="status">
  //     <span className="visually-hidden">Loading...</span>
  //   </div>
  // </div>
  //   );
  // }
  // d-flex flex-column flex-lg-row
  return (
    <section>
      {loader ? (
        <div className="text-center">
          <div className="spinner-border mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-center m-5 text-primary">MENU CATEGORIES</h3>
          <div className=" serviceRoute container mt-5 mb-5 ">
            {serviceData.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesRoute;
