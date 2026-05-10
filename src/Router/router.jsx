import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../components/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../components/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            //All time set default route------>
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            }

            ,
            {
                path: "category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
        ],
    },
    {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },

    // {
    //     path: "*",
    //     element: <h1>Error Page</h1>,
    // },
    {
        path: "login",
        element: <Login></Login>,
    }

]);


export default router;