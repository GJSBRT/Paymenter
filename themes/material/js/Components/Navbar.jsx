import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Tooltip, Avatar, Menu, MenuItem, Container } from '@mui/material';
import { AdminPanelSettings, Person, Logout } from '@mui/icons-material';
import { useGetUserQuery } from '../API';
import { NavLink } from "react-router-dom";
import axios from 'axios';

export default function Navbar() {
    const [ authenticated, setAuthenticated ] = React.useState(false);
    const pages = ['Home', 'About', 'Contact'];

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { data: user, isError, isLoading } = useGetUserQuery();

    React.useEffect(() => {
        if (!isLoading) {
            if (user === undefined) {
                setAuthenticated(false);
            } else {
                setAuthenticated(true);
            }
        }
    }, [ isLoading ]);

    const logout = () => {
        axios.post('/logout').then(() => {
            window.location = '/';
        });
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {!authenticated ? 
                        <NavLink to='/auth/login'>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Login
                            </Button>
                        </NavLink>
                        :
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
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
                                <NavLink to='/dashboard/account'>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Person/><Typography sx={{ ml: 1 }} textAlign="center">Account</Typography>
                                    </MenuItem>
                                </NavLink>
                                
                                <NavLink to='/admin'>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <AdminPanelSettings/><Typography sx={{ ml: 1 }} textAlign="center">Admin</Typography>
                                    </MenuItem>
                                </NavLink>

                                <MenuItem onClick={logout}>
                                    <Logout sx={{ color: 'red' }}/><Typography sx={{ ml: 1, color: 'red' }} textAlign="center">Logout</Typography>
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