import React from 'react'
import { Link } from 'react-router'
import Header from "../components/Header";
import GetStartedOptions from "../components/PlatformSetup/GetStartedOptions";
import {PlatFormSetupContextProvider} from "../context/PlatFormSetupContext";
import BusinessProfileForm from "../components/PlatformSetup/BusinessProfileForm";

const PlatformSetup = () => {

    return (
        <div>
            <Header title={"Platform Setup"} userName={"Joel Adjei"} email={"joelajei01@gmail.com"} />

            <PlatFormSetupContextProvider>
                <div className={"p-7 h-full grid grid-cols-[1fr_2fr] gap-7"}>
                    <GetStartedOptions />
                    <div>
                        <BusinessProfileForm />
                    </div>
                </div>


            </PlatFormSetupContextProvider>

        </div>
    )
}

export default PlatformSetup