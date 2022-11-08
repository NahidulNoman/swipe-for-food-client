import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import MyReviewTable from "./MyReviewTable";

const MyReviewDetails = ({ review }) => {
  const { name, message, reviewId } = review;
  const [nowReview, setNowReview] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${reviewId}`)
      .then((res) => res.json())
      .then((data) => setNowReview(data));
  }, [reviewId]);
  console.log(nowReview);
  return (
    <Table striped bordered hover size="lg">
      <MyReviewTable></MyReviewTable>
      <tbody>
        <tr>
          <td>X</td>
          <td>{nowReview.name}</td>
          <td>{name}</td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default MyReviewDetails;
