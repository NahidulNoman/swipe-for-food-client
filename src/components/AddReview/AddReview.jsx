import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import toast from "react-hot-toast";
import useTitle from "../hooks/UseTitle";

const AddReview = () => {
  useTitle("Add Service");
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.photoUrl.value;
    const price = form.price.value;
    const description = form.description.value;
    const userReview = {
      name,
      img,
      description,
      price,
    };
    // console.log(userReview);

    fetch("https://swipe-for-food-server.vercel.app/services", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) =>{
         if(data.acknowledged){
          toast.success('Your service is added service page !!')
          form.reset();
         }
      });
  };

  return (
    <div className="container mt-5 shadow-lg p-4 bg-light">
      <h3 className="text-center fw-bold mb-4">
        ADD YOUR <span className="text-success">SERVICE</span>
      </h3>
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
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label className="fw-semibold">Order Price</Form.Label>
          <Form.Control
            name="price"
            type="text"
            placeholder="Enter price"
            required
          />
        </Form.Group>
        <InputGroup>
          <InputGroup.Text className="fw-semibold">Description</InputGroup.Text>
          <Form.Control
            name="description"
            type="text"
            as="textarea"
            aria-label="With textarea"
            placeholder="write your order Description..."
            required
          />
        </InputGroup>

        <Button variant="primary" type="submit" className="fw-semibold mt-4 ">
          ADD SERVICE
        </Button>
      </Form>
    </div>
  );
};

export default AddReview;
