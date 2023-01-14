import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from '@mui/material';
import Navbar from '../Components/Navbar';

export default function WebsiteLayout() {
    return (
        <>
            <Navbar/>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}