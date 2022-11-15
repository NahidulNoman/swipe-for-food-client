import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import MyReviewDetails from "./MyReviewDetails";
import toast from "react-hot-toast";
import "./ReviewDetails.css";
import useTitle from "../hooks/UseTitle";

const MyReview = () => {
  const { user , logOut} = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My Review");
  // myReview data loaded
  useEffect(() => {
    fetch(` https://swipe-for-food-server.vercel.app/review?email=${user?.email}`, {
      headers : {
        authorization : `Bearer ${localStorage.getItem('swipe-token')}`
      }
    })
      .then((res) => {
        if(res.status === 403 || res.status === 401){
          logOut();
        }
        return res.json()
      } )
      .then((data) => {
        // console.log(data)
        setReviews(data)
      });
  }, [user?.email,logOut]);

// console.log(reviews)
  // is length 0 show text
  if (reviews.length === 0) {
    return (
      <h5 className="text-center mt-5 display-2 text-danger">
        No reviews were added
      </h5>
    );
  }

  // delete my review cart
  const handlerDelete = (id) => {
    const agree = window.confirm("you want to delete this service!!");
    if (agree) {
      fetch(`https://swipe-for-food-server.vercel.app/review/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
            toast.success("service deleted successfully.");
          }
        });
    }
  };

  

  return (
    <div className="container">
      <h3 className="text-center text-primary m-5">YOUR TOTAL REVIEW</h3>
      <div className=" mt-5 cardContainer">
        {reviews.map((review) => (
          <MyReviewDetails
            key={review._id}
            review={review}
            handlerDelete={handlerDelete}
            // handlerUpdate={handlerUpdate}
          ></MyReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
