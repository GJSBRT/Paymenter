import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../css/app.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },{
        path: "/kaas",
        element: <div>kaas</div>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);