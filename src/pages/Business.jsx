import React, {useEffect} from 'react'
import {Link, Outlet, useNavigate} from 'react-router'
import SideNavbar from "../components/SideNavbar";

const Business = () => {
    const navigator= useNavigate()
    // useEffect(()=>{
    //    navigator("/business/setup");
    // },[])

    return (
        <>
            <section>
                <SideNavbar />
                <main className={`ml-45`} >
                    <Outlet />
                </main>
            </section>
        </>
    )
}

export default Business