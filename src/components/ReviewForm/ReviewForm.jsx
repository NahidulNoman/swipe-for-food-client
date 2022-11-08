import React, { useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { AuthContext } from "../../UserContext/UserContext";

const ReviewForm = ({children}) => {
  const { user } = useContext(AuthContext);
    const reviewId = children;
    // console.log(reviewId);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const message = form.message.value;
    const userReview = {
        name,
        photoUrl,
        email,
        message,
        reviewId,
    }
    console.log(userReview);

    fetch('http://localhost:5000/review', {
        method : 'post',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(userReview)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            alert('submit successfully!!')
            console.log(data)
        }
    })

  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="fw-semibold">Your Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label className="fw-semibold">Photo URL</Form.Label>
        <Form.Control
          name="photoUrl"
          type="text"
          placeholder="Enter photo url"
          readOnly
          defaultValue={user?.photoURL}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-semibold">Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          defaultValue={user?.email}
          readOnly
        />
      </Form.Group>

      <InputGroup>
        <InputGroup.Text className="fw-semibold">Review Message </InputGroup.Text>
        <Form.Control name="message" type="text" as="textarea" aria-label="With textarea" placeholder="write your review message..." />
      </InputGroup>
      <Button variant="primary" type="submit" className="fw-semibold mt-4 ">
        SIGN UP
      </Button>
    </Form>
  );
};

export default ReviewForm;
