import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import UserReviewDetails from './UserReviewDetails';
import './reviewDetails.css';

const UserReview = ({children}) => {
    // const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState([]);
    
    const idReview = children;

    useEffect( () => {
        fetch(`https://swipe-for-food-server.vercel.app/review/${idReview}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[idReview])

    // console.log(idReview)
    return (
        <div className='reviewDetails services'>
            {
                reviews.map(review => <UserReviewDetails
                key={review._id}
                review={review}
                ></UserReviewDetails>)
            }
        </div>
    );
};

export default UserReview;