import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Container } from '@mui/material';
import { AdminPanelSettings, Person, Logout, Dashboard } from '@mui/icons-material';
import { useGetUserQuery } from '../API';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useGetLogoQuery } from '../API/Website';

export default function WebsiteNavbar() {
    const [authenticated, setAuthenticated] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { data: logoData, isError: logoError, isLoading: logoLoading } = useGetLogoQuery();
    const { data: user, isError, isLoading } = useGetUserQuery();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(() => {
        if (!isLoading) {
            if (user === undefined) {
                setAuthenticated(false);
            } else {
                setAuthenticated(true);
            }
        }
    }, [isLoading]);

    const logout = () => {
        axios.post('/logout').then(() => {
            window.location = '/';
        });
    };

    return (
        <Box sx={{ flexGrow: 1, mb: 2 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink to='/'>
                                {logoLoading ?
                                    <label>Loading</label>
                                    :
                                    <img className='h-12' src={logoData.logo} />
                                }
                            </NavLink>
                        </Typography>

                        {!authenticated ?
                            <NavLink to='/auth/login'>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                    Login
                                </Button>
                            </NavLink>
                            :
                            <Box sx={{ flexGrow: 0 }}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={user.user.name} >
                                        {user.user.name.charAt(0)}
                                    </Avatar>
                                </IconButton>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <NavLink to='/dashboard'>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Dashboard /><Typography sx={{ ml: 1 }} textAlign="center">Dashboard</Typography>
                                        </MenuItem>
                                    </NavLink>

                                    <NavLink to='/dashboard/account'>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Person /><Typography sx={{ ml: 1 }} textAlign="center">Account</Typography>
                                        </MenuItem>
                                    </NavLink>

                                    <NavLink to='/admin'>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <AdminPanelSettings /><Typography sx={{ ml: 1 }} textAlign="center">Admin</Typography>
                                        </MenuItem>
                                    </NavLink>

                                    <MenuItem onClick={logout}>
                                        <Logout sx={{ color: 'red' }} /><Typography sx={{ ml: 1, color: 'red' }} textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}