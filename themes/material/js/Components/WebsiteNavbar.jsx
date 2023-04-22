import * as React from 'react';
import { useGetUserQuery } from '../API';
import { Link } from "react-router-dom";
import axios from 'axios';
import Button from './Button';

export default function WebsiteNavbar() {
    const [authenticated, setAuthenticated] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { data: user, isError, isLoading } = useGetUserQuery();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(() => {
        if (!isLoading) {
            setAuthenticated(user || !isError);
        }
    }, [isLoading]);

    const logout = () => {
        axios.post('/logout').then(() => {
            window.location = '/';
        });
    };

    return (
        <nav>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                <Link href="/" class="flex items-center">
                    <img src={window.ThemeData.logo} class="h-8 mr-3" alt="Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{window.ThemeData.name}</span>
                </Link>

                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>

                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 dark:text-white md:dark:text-indigo-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Annoucements</a>
                        </li>
                        <li>
                            {window.ThemeData.user ?
                                <Button to='/dashboard'>Dashboard</Button>
                            :
                                <Button to='/login'>Login</Button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}