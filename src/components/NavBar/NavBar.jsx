import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

// SWIPE FOR FOOD
const NavBar = () => {
  const { user,logOut} = useContext(AuthContext);

  const handlerLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(error => {
      console.log(error)
    })
  };
  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          SWIPE FOR FOOD
        </Link>
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
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            {user?.email ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold"
                    to="/home"
                    title="Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold"
                    to="/blog"
                    title="Blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold"
                    to="/services"
                    title="Services"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold"
                    to="/services"
                    title="Services"
                  >
                    My Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold"
                    to="/services"
                    title="Services"
                  >
                    Add Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={handlerLogOut}
                    className="nav-link fw-semibold"
                    title="Log Out"
                  >
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold"
                    to="/home"
                    title="Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold"
                    to="/blog"
                    title="Blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold"
                    to="/services"
                    title="Services"
                  >
                    Services
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
