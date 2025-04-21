import React, {useEffect, useState} from 'react'
import {Link, Outlet, useNavigate} from 'react-router'
import Header from "../components/Header";
import GetStartedOptions from "../components/PlatformSetup/GetStartedOptions";
import {PlatFormSetupContextProvider, usePlatFormSetup} from "../context/PlatFormSetupContext";
import BusinessProfileForm from "../components/PlatformSetup/BusinessProfileForm";
import CustomerData from "../components/PlatformSetup/CustomerData";
import AIAgentForm from "../components/PlatformSetup/AiAgentForm";
import CreateCampaignForm from "../components/PlatformSetup/CreateCampaignForm";

const PlatformSetup = () => {
    const [ currentState , setCurrentState ] = useState("createCampaign")
    const navigator = useNavigate()

    // const { currentState } = usePlatFormSetup();

    // setCurrentState("businessProfile")
    return (
        <div>
            <Header title={"Platform Setup"} userName={"Joel Adjei"} email={"joelajei01@gmail.com"} />

            <PlatFormSetupContextProvider>
                <div className={"p-7 h-full grid grid-cols-[1fr_2fr] gap-7"}>
                    <GetStartedOptions  />
                    <div>
                        { currentState === "businessProfile" && <BusinessProfileForm /> }
                        { currentState === "cusData" && <CustomerData />}
                        { currentState === "AiAgent" && <AIAgentForm />}
                        { currentState === "createCampaign" && <CreateCampaignForm />}
                    </div>
                </div>


            </PlatFormSetupContextProvider>

        </div>
    )
}

export default PlatformSetup