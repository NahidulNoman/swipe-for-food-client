import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home/Home";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import ServicesRoute from "../components/servicesRoute/ServicesRoute";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage> ,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/services',
                element : <ServicesRoute></ServicesRoute>,
                loader : ()=> fetch('https://swipe-for-food-server.vercel.app/services'),
            },
            {
                path : '/services/:id',
                element : <ServiceDetails></ServiceDetails>,
                loader : ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
            }
        ]
    }
]);