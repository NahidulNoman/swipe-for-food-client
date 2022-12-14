import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import useTitle from "../hooks/UseTitle";

const Login = () => {
  useTitle("Login");
  const [errors, setErrors] = useState("");
  const { logUser, signInGoogle, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        fetch("https://swipe-for-food-server.vercel.app/jwt", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.token);
            localStorage.setItem('swipe-token', data.token)
            toast.success("user login successfully !!");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };
  // sign is with google
  const handlerGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrors(errorMessage);
        console.log(error);
      });
  };

  return (
    <div className="w-75 mx-auto mt-5 shadow-lg p-3 rounded-4 bg-light">
      <h2 className="text-center text-success fw-bold">
        Quick Log In <FaArrowAltCircleRight></FaArrowAltCircleRight>
      </h2>
      <p className="mt-3 text-center text-danger">
        <small>{errors}</small>
      </p>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-semibold">Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="fw-semibold">
          LOG IN
        </Button>
      </Form>
      <div className="mt-3 d-flex">
        <p className="me-3">
          <small className="fw-semibold opacity-75">
            New This Site.<Link to="/signup">Sign Up</Link>
          </small>
        </p>
        <div className="d-flex">
          <p className="me-3">
            <small onClick={handlerGoogle} className="fw-semibold opacity-75">
              Log In with <Link>GooGle</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
