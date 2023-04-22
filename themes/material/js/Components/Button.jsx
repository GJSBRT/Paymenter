import React from 'react';
import { NavLink } from 'react-router-dom';

export default function (props) {
    var Element = 'button';

    if (props.to) {
        Element = NavLink;
    }

    switch (props.type) {
        case 'error':
            return (
                <Element type={props.type ?? 'button'} to={props.to} className={`focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ${props.className}`}>{props.children}</Element>
            )
        default:
            return (
                <Element type={props.type ?? 'button'} to={props.to} className={`focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900 ${props.className}`}>{props.children}</Element>
            )
    }
}