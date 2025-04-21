import React from 'react'
import { } from "react-icons/ai";
import { GrNotification} from "react-icons/gr";
import { Link } from 'react-router'
import AppText from "./Texts/AppText";

const Header = ({title , email, userName ,src}) => {

    return (
        <>
            <div className={`w-full h-22 px-7 bg-white flex justify-between items-center border-b-1 border-gray-200`}>
                <AppText>{title}</AppText>

                <div className={"flex items-center gap-7"}>
                    <GrNotification className={"text-gray-500"} size={20} />

                    <div className={"flex gap-3 items-center"}>
                        <img className={"size-8 rounded-[100%]"} src={src} alt={""} />
                        <div>
                            <AppText className={"text-[18px] font-bold text-black"}>{userName}</AppText>
                            <span style={{lineHeight: "10px"}} className={"text-sm"}> {email} </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header