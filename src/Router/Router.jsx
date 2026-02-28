import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import RouterLayout from './RouterLayout';
import MyProjects from '../Pages/MyProjects';
import Contact from '../Pages/Contact';

const Router = createBrowserRouter([
    {
        path:'/',
        Component:RouterLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'projects',
                Component:MyProjects
            },
            {
                path:'contact',
                Component:Contact
            }
        ]
    }
])

export default Router;