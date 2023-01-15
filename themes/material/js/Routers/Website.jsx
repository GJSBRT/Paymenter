import React from "react";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Website/Home";

const WebsiteRoutes = [
    {
        path: "/",
        element: <Home/>,
    },{
        path: "login",
        element: <Login/>,
    },
]

export default WebsiteRoutes;