import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import AddNewService from "../../Pages/AddNewService/AddNewService";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import ServiceDisplay from "../../Pages/Home/ServiceDisplay/ServiceDisplay";
import Inventory from "../../Pages/Inventory/Inventory";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import ReviewUpdate from "../../Pages/Reviews/ReviewUpdate";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },  
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/serviceDisplay',
                element: <ServiceDisplay></ServiceDisplay>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/checkout/:id',
                loader: ({params})=> fetch(`https://foodie-service-server.vercel.app/services/${params.id}`),
                element: <Checkout></Checkout>
            },
            {
                path: '/addNewService',
                element: <PrivateRoute><AddNewService></AddNewService></PrivateRoute>
            },
            {
                path: '/reviewUpdate/:id',
                loader: ({params}) => fetch(`https://foodie-service-server.vercel.app/reviews/${params.id}`),
                element: <PrivateRoute><ReviewUpdate></ReviewUpdate></PrivateRoute>
            },

            
        ]
    },
    {
        path: '*',
        element: <div className="text-center"><h1 className="text-5xl text-red-600">Error 404!!</h1> <p className="text-3xl text-yellow-400">Something Wrong happen!!!</p></div>
    }

]);

export default router;