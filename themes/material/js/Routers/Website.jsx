import React from "react";
import Login from "../Pages/Auth/Login";

const WebsiteRoutes = [
    {
        path: "/",
        element: <div>Hello world!</div>,
    },{
        path: "login",
        element: <Login/>,
    },
]

export default WebsiteRoutes;