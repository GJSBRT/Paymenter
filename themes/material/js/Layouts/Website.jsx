import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer';
import WebsiteNavbar from '../Components/WebsiteNavbar';

export default function WebsiteLayout() {
    return (
        <>
            <WebsiteNavbar/>
            <Outlet />
            <Footer/>
        </>
    )
}