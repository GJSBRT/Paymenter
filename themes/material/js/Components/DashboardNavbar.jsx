import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, List, Divider, Drawer, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { AdminPanelSettings, Person, Logout, ConfirmationNumber, Dashboard, Description } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useGetUserQuery } from '../API';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useGetLogoQuery } from '../API/Website';

export default function DashboardNavbar(props) {
    const [authenticated, setAuthenticated] = React.useState(false);
    const [showSidebar, setShowSidebar] = React.useState(true);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const theme = useTheme();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { data: user, isError, isLoading } = useGetUserQuery();
    const { data: logoData, isError: logoError, isLoading: logoLoading } = useGetLogoQuery();

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

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: '-240px',
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
        }),
    );

    const Navbar = styled(AppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - 240px)`,
            marginLeft: '240px',
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    return (
        <Box sx={{ flexGrow: '0' }}>
            <Navbar position="static" open={showSidebar}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
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
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
            </Navbar>
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={showSidebar}
            >
                <DrawerHeader>
                    <Box sx={{ mx: 'auto' }}>
                        <NavLink to='/dashboard'>
                            {logoLoading ?
                                <label></label>
                                :
                                <img className='h-12' src={logoData.logo} />
                            }
                        </NavLink>
                    </Box>
                </DrawerHeader>
                <Divider />
                <List>
                    <NavLink to='/dashboard'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary={'Dashboard'} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>

                    <NavLink to='/dashboard/tickets'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ConfirmationNumber />
                                </ListItemIcon>
                                <ListItemText primary={'Tickets'} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>


                    <NavLink to='/dashboard/invoices'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Description />
                                </ListItemIcon>
                                <ListItemText primary={'Invoices'} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
            <Main open={showSidebar}>
                {props.children}
            </Main>
        </Box>
    );
}