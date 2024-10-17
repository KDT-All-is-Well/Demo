import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App.js';
import Landing from '../pages/landing/Landing';

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
        ],
    },
]);

export default router;
