import React from "react";

// SWIPE FOR FOOD
const NavBar = () => {

  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <span class="navbar-brand">
        SWIPE FOR FOOD
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <span class="nav-link active" aria-current="page">
                Home
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                Features
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link" >
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
