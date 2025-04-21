import React from "react";
import ReferralDashboard from "../components/Dashboard/ReferrealDashboard";
import Header from "../components/Header";

const Dashboard = ()=>{
    return(
        <div>
            <Header title={"Dashboard"} />
            <ReferralDashboard />
        </div>
    )
}

export default Dashboard;