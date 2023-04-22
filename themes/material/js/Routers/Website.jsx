import React from "react";
import Login from "../Pages/Auth/Login";
import Categories from "../Pages/Website/Categories";
import Announcements from "../Pages/Website/Announcements";
import ViewAnnouncement from "../Pages/Website/Announcements/View";

const WebsiteRoutes = [
    {
        path: "categories",
        element: <Categories/>,
    }, {
        path: "announcements",
        element: <Announcements/>,
    }, {
        path: "announcements/:id",
        element: <ViewAnnouncement/>,
    }, {
        path: "login",
        element: <Login/>,
    },
]

export default WebsiteRoutes;