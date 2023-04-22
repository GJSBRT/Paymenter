import React from "react";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Tickets from "../Pages/Dashboard/Tickets";
import ViewTicket from "../Pages/Dashboard/Tickets/View";

const DashboardRoutes = [
    {
        path: "",
        element: <Dashboard/>,
    },{
        path: "tickets",
        element: <Tickets/>,
    },{
        path: "tickets/:id",
        element: <ViewTicket/>,
    },
]

export default DashboardRoutes;