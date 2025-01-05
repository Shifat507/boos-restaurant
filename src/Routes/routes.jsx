import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
// import DashBoard from "../layout/DashBoard"
// import DashBoard from "../layout/DashBoard";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import Order from "../pages/Order";
// import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DasBoard from "../layout/DashBoard";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/dashboard/cart/cart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>
            },

            {
                path: '/orders/:category',
                element: <Order></Order>
            },
            {
                path: '/contactUS',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            }
        ]
    }
]);

export default router;