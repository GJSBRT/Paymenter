import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../css/app.css";
import WebsiteLayout from "./Layouts/Website";
import NotFound from "./Pages/Error/NotFound";
import AdminRoutes from "./Routers/Admin";
import AuthRoutes from "./Routers/Auth";
import DashboardRoutes from "./Routers/Dashboard";
import WebsiteRoutes from "./Routers/Website";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <WebsiteLayout/>,
        children: AdminRoutes,
    },{
        path: "/auth",
        element: <WebsiteLayout/>,
        children: AuthRoutes,
    },{
        path: "/dashboard",
        element: <WebsiteLayout/>,
        children: DashboardRoutes,
    },{
        path: "/",
        element: <WebsiteLayout/>,
        children: WebsiteRoutes,
        errorElement: <NotFound/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);