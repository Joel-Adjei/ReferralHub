import React, {useState} from 'react'
import { Link } from 'react-router'
import { AiOutlineCheck} from "react-icons/ai";

import AppText from "../Texts/AppText";
import ColoredText from "../Texts/ColoredText";
import {usePlatFormSetup} from "../../context/PlatFormSetupContext";

const Options =( {title, next , onClick} )=>{
    const [progress , setProgress] = useState("Not Started")

    return(
        <div onClick={onClick} className={"flex items-center cursor-pointer gap-2"}>
            <div className={`size-8 flex items-center justify-center border-1 border-blue-300 rounded-[100%]`}>
                { next === "Completed" ?
                    <div className={`size-full flex items-center justify-center bg-green-400 rounded-[100%]`}>
                        <AiOutlineCheck color={"white"} size={22} />
                    </div>
                    : null
                }
                {
                    next === "Progress" &&
                    <div className={`size-5 bg-blue-400 rounded-[100%]`}>
                    </div>
                }
            </div>

            <div className={"py-3"}>
                <AppText className={"text-[12px] font-[Montserrat] font-bold leading-5"}>{title}</AppText>
                { next ?
                    <AppText
                    className={`text-[11px] ${next === "Completed" ? "text-green-400" : "text-blue-400" } `}
                    >
                        {next}
                    </AppText> :
                    <AppText className={"text-[11px]"}>Not Started</AppText>}

            </div>
        </div>
    )
}
const GetStartedOptions = () => {

    const { progress , toBusinessProfile , toCustomerData} = usePlatFormSetup()


    return (
        <>
            <div className={`p-4 flex flex-col bg-gray-100 rounded-lg h-full`}>
                <div className={"border-b-1 border-gray-200 pb-5"}>
                    <ColoredText className={`text-md mb-2`}>Get Started with ReferralHub</ColoredText>
                    <AppText className={`text-sm`}>To get started with better referrals & rewards, complete
                        your account setup in a few easy steps</AppText>
                </div>

                <div className={"pt-7"}>
                    <Options next={progress} onClick={toBusinessProfile} title={"Set Up Business Profile"}  />
                    <Options onClick={toCustomerData} title={"Sync Your Customer Data"} />
                    <Options  title={"Set Up AI Agent Rules"}  />
                    <Options  title={"Set Up AI First Campaign"}  />
                </div>
            </div>
        </>
    )
}

export default GetStartedOptions