import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App.js';
import Landing from '../pages/landing/Landing';
import Login from '../pages/login/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="landing" replace />,
            },
            {
                path: "landing",
                element: <Landing />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
]);

export default router;
