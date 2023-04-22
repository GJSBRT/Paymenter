import React from "react";
import Login from "../Pages/Auth/Login";
import Categories from "../Pages/Website/Categories";

const WebsiteRoutes = [
    {
        path: "categories",
        element: <Categories/>,
    },{
        path: "login",
        element: <Login/>,
    },
]

export default WebsiteRoutes;