import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ReviewUpdate = () => {

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
        }
    }

    return (
        <div>
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
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-semibold">Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="fw-semibold mt-4 ">
        SIGN UP
      </Button>
    </Form>
        </div>
    );
};

export default ReviewUpdate;