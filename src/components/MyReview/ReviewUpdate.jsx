import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/UseTitle";

const ReviewUpdate = () => {
  useTitle("Review Update");
  const reviews = useLoaderData();
  // const { _id } = reviewData;
  console.log(reviews._id);

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch(`https://swipe-for-food-server.vercel.app/rev/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, [_id]);

  // console.log(reviewData);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const userReview = {
      name,
      message
    }
 fetch(`https://swipe-for-food-server.vercel.app/review/${reviews._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("your review is updated !!");
        }
        // console.log(data)
      });
  };

  return (
    <div className="container mt-5 shadow-lg p-4">
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fw-semibold">Reviewer Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your name"
            defaultValue={reviews.name}
          />
        </Form.Group>

        <InputGroup>
          <InputGroup.Text className="fw-semibold">
            Review Message{" "}
          </InputGroup.Text>
          <Form.Control
            name="message"
            type="text"
            as="textarea"
            aria-label="With textarea"
            placeholder="write your review message..."
            defaultValue={reviews.message}
          />
        </InputGroup>

        <Button variant="primary" type="submit" className="fw-semibold mt-4 ">
          UPDATE
        </Button>
      </Form>
    </div>
  );
};

export default ReviewUpdate;
