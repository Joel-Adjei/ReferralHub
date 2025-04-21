import {Outlet, useNavigate} from 'react-router'
import React, {useEffect} from "react";

import './App.css'


const App = () => {

    const navigator = useNavigate()

    useEffect(()=>{
        navigator("/login")
    },[])

    return (
            <div className="min-h-screen bg-gray-100">
                {/*<button onClick={()=>}> click </button>*/}
                <main className="container mx-auto px-4 py-8">
                    <Outlet />
                </main>
            </div>
    )
}

export default App