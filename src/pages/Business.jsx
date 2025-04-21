import React from 'react'
import {Link, Outlet} from 'react-router'
import SideNavbar from "../components/SideNavbar";

const Business = () => {

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