import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer';
import WebsiteNavbar from '../Components/WebsiteNavbar';

export default function WebsiteLayout() {
    return (
        <div className='flex flex-col h-screen mx-4 md:mx-0'>
            <WebsiteNavbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}