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
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { RestAPI } from "./API";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <WebsiteLayout />,
        children: AdminRoutes,
    }, {
        path: "/auth",
        element: <WebsiteLayout />,
        children: AuthRoutes,
    }, {
        path: "/dashboard",
        element: <WebsiteLayout />,
        children: DashboardRoutes,
    }, {
        path: "/",
        element: <WebsiteLayout />,
        children: WebsiteRoutes,
        errorElement: <NotFound />,
    },
]);

const rootReducer = combineReducers({
    [RestAPI.reducerPath]: RestAPI.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(RestAPI.middleware),
});

// Get CSRF cookie
store.dispatch(RestAPI.endpoints.getCSRFCookie.initiate());

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
