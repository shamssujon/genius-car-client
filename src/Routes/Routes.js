import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import CheckoutPage from "../Pages/CheckoutPage";
import HomePage from "./../Pages/HomePage";
import LoginPage from "./../Pages/LoginPage";
import RegisterPage from "./../Pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>,
            },
            {
                path: "/signup",
                element: <RegisterPage></RegisterPage>,
            },
            {
                path: "/service/:id/checkout",
                element: <CheckoutPage></CheckoutPage>,
                loader: ({ params }) => fetch(`http://localhost:7100/service/${params.id}`),
            },
            {
                path: "*",
                element: "404 No page found",
            },
        ],
    },
]);

export default router;
