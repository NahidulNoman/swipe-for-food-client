import { createBrowserRouter } from "react-router-dom";
import AddReview from "../components/AddReview/AddReview";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import MyReview from "../components/MyReview/MyReview";
import ReviewUpdate from "../components/MyReview/ReviewUpdate";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import ServicesRoute from "../components/servicesRoute/ServicesRoute";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "../Private/PrivateRoute";
// import PrivateRoute from "../Private/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <ServicesRoute></ServicesRoute>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://swipe-for-food-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviewUpdate/:id",
        element: <ReviewUpdate></ReviewUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://swipe-for-food-server.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
]);
