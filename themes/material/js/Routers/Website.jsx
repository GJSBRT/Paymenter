import React from "react";
import Login from "../Pages/Auth/Login";
import Categories from "../Pages/Website/Categories";
import Announcements from "../Pages/Website/Announcements";

const WebsiteRoutes = [
    {
        path: "categories",
        element: <Categories/>,
    }, {
        path: "announcements",
        element: <Announcements/>,
    }, {
        path: "login",
        element: <Login/>,
    },
]

export default WebsiteRoutes;