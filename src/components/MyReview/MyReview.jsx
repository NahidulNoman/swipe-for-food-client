import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    
    // console.log(reviews)
    return (
        <div className='container'>
            {
                reviews.map(review => <MyReviewDetails
                key={review._id}
                review={review}
                ></MyReviewDetails>)
            }
        </div>
    );
};

export default MyReview;