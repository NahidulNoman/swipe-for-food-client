import React from "react";

const UserReviewDetails = ({ review }) => {
//   console.log(review);
  const {message,name,photoUrl} = review;
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={photoUrl} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
             {message? message.slice(0,200)+'...' : ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviewDetails;
