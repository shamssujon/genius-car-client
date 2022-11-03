import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
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
                path: "*",
                element: "404 No page found",
            },
        ],
    },
]);

export default router;
