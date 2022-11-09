import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const MyReviewDetails = ({ review,handlerDelete,handlerUpdate }) => {
  const { name, message, reviewId,_id } = review;
  const [nowReview, setNowReview] = useState({});
  // const {_id} = nowReview;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${reviewId}`)
      .then((res) => res.json())
      .then((data) => setNowReview(data));
  }, [reviewId]);

  // console.log(review)
  


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{nowReview.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
        <Card.Text>
          {message}
        </Card.Text>
        <Button onClick={()=>handlerDelete(_id)} variant="outline-danger" className="me-5">DELETE</Button>
        <Link to='/reviewUpdate'><Button variant="outline-success">UPDATE</Button></Link>
      </Card.Body>
    </Card>
  );
};
//onClick={()=>handlerUpdate(_id)} 
export default MyReviewDetails;
