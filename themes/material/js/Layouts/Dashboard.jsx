import React from 'react';
import { Outlet } from "react-router-dom";
import { Container, Box } from '@mui/material';
import DashboardNavbar from '../Components/DashboardNavbar';

export default function DashboardLayout() {
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
        }}>
            <DashboardNavbar>
                <Container>
                    <Outlet />
                </Container>
            </DashboardNavbar>
        </Box>
    )
}