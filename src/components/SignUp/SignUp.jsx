import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import useTitle from '../hooks/UseTitle';

const SignUp = () => {
  useTitle('Sign Up')
 const [errors, setErrors] = useState("");
 const {createUser,signInGoogle,userUpdateInfo,setUser} = useContext(AuthContext);

  
    const handlerSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photoUrl = form.photoUrl.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password, photoUrl);
  
      createUser(email, password)
        .then((result) => {
          setErrors("");
          setUser(result);
          updateUser(name, photoUrl);
          toast.success('Successfully Sign Up !!');
          form.reset();
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          // console.log(error);
          setErrors(errorMessage);
        });
    };
    // user profile and name update info
    const updateUser = (name, photoUrl) => {
      const profile = {
        displayName: name,
        photoURL: photoUrl,
      };
      userUpdateInfo(profile)
        .then((result) => {
          setUser(result);
          // console.log(result.user)
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrors(errorMessage);
        });
    };
    // sign in with google
    const handlerGoogle = () => {
        signInGoogle()
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(error);
          setErrors(errorMessage);
        });
    };


    return (
        <div className="w-75 mx-auto mt-5 shadow-lg p-3 rounded-4 mb-5 bg-light">
      <h2 className="text-center text-success fw-bold">
        Sign Up <FaCheckCircle></FaCheckCircle>
      </h2>
      <p className="mt-3 text-center text-danger">
        <small>{errors}</small>
      </p>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fw-semibold">Full Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter full name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label className="fw-semibold">Photo URL</Form.Label>
          <Form.Control
            name="photoUrl"
            type="text"
            placeholder="Enter photo url"
            required
          />
        </Form.Group>
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
          SIGN UP
        </Button>
      </Form>
      <div className="mt-3 d-flex">
        <p className="me-3">
          <small className="fw-semibold opacity-75">
            Have a Account.<Link to="/login">Log In</Link>
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

export default SignUp;