import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const AddReview = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.photoUrl.value;
    const price = form.price.value;
    const message = form.message.value;
    const userReview = {
      name,
      img,
      message,
      price
    };
    console.log(userReview);

    fetch('http://localhost:5000/services', {
        method : 'post',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(userReview)
    })
    .then(res => res.json())
    .then(data => console.log(data))

  };

  return (
    <div className="container">
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fw-semibold">Order Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter order name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label className="fw-semibold">Add Img</Form.Label>
          <Form.Control
            name="photoUrl"
            type="text"
            placeholder="add image"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label className="fw-semibold">Order Price</Form.Label>
          <Form.Control
            name="price"
            type="text"
            placeholder="Enter price"
          />
        </Form.Group>
        <InputGroup>
        <InputGroup.Text className="fw-semibold">Description</InputGroup.Text>
        <Form.Control name="message" type="text" as="textarea" aria-label="With textarea" placeholder="write your order Description..." />
      </InputGroup>

        <Button variant="primary" type="submit" className="fw-semibold mt-4 ">
          POST
        </Button>
      </Form>
    </div>
  );
};

export default AddReview;
