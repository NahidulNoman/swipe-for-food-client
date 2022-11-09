import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import MyReviewDetails from './MyReviewDetails';
import toast from "react-hot-toast";
import './ReviewDetails.css';
import useTitle from '../hooks/UseTitle';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState([]);
  useTitle('My Review')
    // myReview data loaded
    useEffect( () => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    // is length 0 show text
    if(reviews.length === 0){
        return <h5 className='text-center mt-5 display-2 text-danger'>No reviews were added</h5>
    };


    // delete my review cart
    const handlerDelete = (id) => {
        const agree = window.confirm('you want to delete this service!!')
        if(agree){
          fetch(`http://localhost:5000/review/${id}`, {
            method : 'delete',
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount ){
                const remaining = reviews.filter(rev => rev._id !== id)
                setReviews(remaining);
              toast.success('service deleted successfully.')
            }
          })
        }
      }

      // update my review 
      // const handlerUpdate = (id) => {
      //     fetch(`http://localhost:5000/review/${id}`, {
      //       method : 'patch',
      //       headers : {
      //         'content-type' : 'application/json'
      //       },
      //       body : JSON.stringify()
      //     })
      // }


    return (
        <div className='container mt-5 cardContainer'>
            {
                reviews.map(review => <MyReviewDetails
                key={review._id}
                review={review}
                handlerDelete={handlerDelete}
                // handlerUpdate={handlerUpdate}
                ></MyReviewDetails>)
            }
        </div>
    );
};

export default MyReview;