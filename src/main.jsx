import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import Login from './pages/Login'
import './index.css'
import Home from "./pages/Home";
import Register from "./pages/Register";
import Business from "./pages/Business";
import PlatformSetup from "./pages/PlatformSetup";
import AiAgent from "./pages/AiAgent";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
        path: '/', element: <App />,
        children: [
            { index: true, element: <App /> },
            { path: "login", element: <Login /> },
            { path: 'Register', element: <Register /> },
        ],
    },
    {
        path: "/business", element: <Business />,
        children: [
            { index: true, element: <Business /> },
            { path: "setup" , element: <PlatformSetup /> },
            { path: "AIAgent" , element: <AiAgent /> },
            { path: "dashboard" , element: <Dashboard /> },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode >
        <RouterProvider router={router} />
    </React.StrictMode >
)