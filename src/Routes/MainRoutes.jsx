import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AnimatedLayout from "../SharedComponent/AnimatedLayout";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import PrivetRouter from "./PrivetRouter/PrivetRouter";
import DashBoard from "../Pages/DashBoard/DashBoard";
import EditProfile from "../Pages/DashBoard/Componets/EditProfile/EditProfile";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllProduct from "../Pages/AllProduct/AllProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Root></Root></div>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div><AnimatedLayout><Home></Home></AnimatedLayout></div>,
      },
      {
        path: "/allProducts",
        element: <div><AnimatedLayout><AllProduct></AllProduct></AnimatedLayout></div>,
      },


      {
        path: "/contact",
        element: <div><AnimatedLayout><ContactUs></ContactUs></AnimatedLayout></div>,
      },
      {
        path: "/about",
        element: <div><AnimatedLayout><AboutUs></AboutUs></AnimatedLayout></div>,
      },
      {
        path: "/register",
        element: <div><AnimatedLayout><Register></Register></AnimatedLayout></div>,
      },
      {
        path: "/login",
        element: <div><AnimatedLayout><Login></Login></AnimatedLayout></div>,
      },
      // privet Route 
      
      {
        path: "/dashBoard",
        element: <div><AnimatedLayout> <PrivetRouter><DashBoard></DashBoard></PrivetRouter></AnimatedLayout></div>,
      },
      {
        path: "/donateBlood/user/editProfile",
        element: <div><AnimatedLayout> <PrivetRouter><EditProfile></EditProfile></PrivetRouter></AnimatedLayout></div>,
      },

    ]
  },
]);

export default router