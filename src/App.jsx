import { Outlet } from 'react-router'
import React from "react";

import './App.css'

const App = () => {
    return (
            <div className="min-h-screen bg-gray-100">
                <main className="container mx-auto px-4 py-8">
                    <Outlet />
                </main>
            </div>
    )
}

export default App