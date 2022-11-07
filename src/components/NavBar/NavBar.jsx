import React from "react";

// SWIPE FOR FOOD
const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <span className="navbar-brand">
        SWIPE FOR FOOD
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                Home
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                Features
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" >
                Pricing
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
