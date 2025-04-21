import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router'
import { AiOutlineSetting , AiFillDashboard , AiOutlineFile ,AiOutlineSound,AiOutlineQuestion, AiOutlineUser } from "react-icons/ai";
import { FaPeopleGroup , FaLaptopCode} from "react-icons/fa6";

import ColoredText from "./Texts/ColoredText";

const NavTitles =({icon, title, onClick, active , className})=>{
    return(
    <button
        className={`flex w-full items-center py-2 ${className} border-blue-700 cursor-pointer pl-2 rounded-r`}
        onClick={onClick}
    >
        <span className="mr-2 text-blue-600 text-lg">{icon}</span>
        <ColoredText className={"text-sm"}>{title}</ColoredText>
    </button>
    )
}

const SideNavbar = () => {
    const [active, setActive] = useState(1)
    const navigator = useNavigate()

    return (
        <>
            <div
                className={`w-45 h-full bg-white flex flex-col justify-between border-r-1 border-gray-200 pt-20
                    fixed left-0 top-0 z-90`}>
                <div className={"border-b-1 pb-3 border-gray-200 pr-3"}>
                    <ul>
                        <li> <NavTitles
                                onClick={()=> {
                                    setActive(1)
                                    navigator("/business/setup")
                                }}
                                className={`${active === 1 && "bg-gray-200 border-l-3"}` }
                                active={active} icon={<AiOutlineSetting />}
                                title={"Platform Setup"} /> </li>
                        <li> <NavTitles
                                onClick={()=> {
                                    setActive(2)
                                    navigator("/business/AIAgent")
                                }}
                                className={`${active === 2 && "bg-gray-200 border-l-3"}` }
                                icon={<AiOutlineSetting />}
                                title={"AI Agent"}
                            />
                        </li>
                        <li>
                            <NavTitles
                                onClick={()=> {
                                    setActive(3)
                                    navigator("/business/dashboard")
                                }}
                                className={`${active === 3 && "bg-gray-200 border-l-3"}` }
                                icon={<FaLaptopCode />}
                                title={"Dashboard"}
                            />
                        </li>
                        <li>
                            <NavTitles
                                onClick={()=> setActive(4)}
                                className={`${active === 4 && "bg-gray-200 border-l-3"}` }
                                icon={<AiOutlineSound />}
                                title={"Campaign"}
                            />
                        </li>
                        <li>
                            <NavTitles
                                onClick={()=> setActive(5)}
                                className={`${active === 5 && "bg-gray-200 border-l-3"}` }
                                icon={<AiFillDashboard />}
                                title={"Promoters"}
                            />
                        </li>
                        <li>
                            <NavTitles
                                onClick={()=> setActive(6)}
                                className={`${active === 6 && "bg-gray-200 border-l-3"}` }
                                icon={<FaPeopleGroup />}
                                title={"Leads"}
                            />
                        </li>
                        <li>
                            <NavTitles
                                onClick={()=> setActive(7)}
                                className={`${active === 7 && "bg-gray-200 border-l-3"}` }
                                icon={< AiOutlineFile />}
                                title={"Payouts"}
                            />
                        </li>
                    </ul>
                </div>

                <div className="border-t-1 border-gray-200 pr-3">
                    <ul>
                        <li>
                            <NavTitles
                                onClick={()=> setActive(8)}
                                className={`${active === 8 && "bg-gray-200 border-l-3"}` }
                                icon={<AiOutlineSetting />}
                                title={"Settings"}
                            />
                        </li>
                        <li>
                            <NavTitles
                                onClick={()=> setActive(9)}
                                className={`${active === 9 && "bg-gray-200 border-l-3"}` }
                                icon={<AiOutlineQuestion />}
                                title={"Help"}
                            />
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default SideNavbar