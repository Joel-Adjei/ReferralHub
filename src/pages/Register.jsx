import React from 'react'
import { Link , useNavigate} from 'react-router'
import { BiLogoMessenger } from "react-icons/bi";
import AppText from "../components/Texts/AppText";
import SolidButton from "../components/Buttons/SolidButton";
import AppInput from "../components/Input/Input";
import ColoredText from "../components/Texts/ColoredText";


const Or = () =>{
    return(
        <div className={"relative flex items-center justify-center"}>
            <AppText className={"p-2 bg-white z-20"}>or</AppText>
            <div className={"w-full h-[1px] bg-gray-300 absolute z-10"}> </div>
        </div>
    )
}

const LogoContainer =({src, alt})=> {
    return(
        <div className="size-10 rounded-[100%] bg-gray-300" >
            <img src={src} alt={alt} />
        </div>
    )
}
const Register = () => {

    const navigate = useNavigate();

    return (
        <section className={`px-20 py-5 bg-grey-200 flex flex-col items-center`}>
            <AppText className={`text-3xl font-bold mb-9`}> Register for ReferralHub </AppText>

            <div className={`w-150 px-25 pt-15 pb-5 rounded-lg bg-white`}>

                <div>
                    <AppInput containerStyle={"mb-5"} placeholder={"robert.fox@myemail.com"} title="Email Id" />
                    <AppInput containerStyle={"mb-5"} placeholder={"Enter password"} title="Create Password" />
                    <AppInput containerStyle={"mb-7"} placeholder={"Enter password"} title="Confirm Password" />

                    <SolidButton text={"Login"} onClick={()=> navigate("/business")} />
                </div>

                <Or />

                {/*Logos*/}
                <div className="flex gap-3 justify-center">
                    <LogoContainer />
                    <LogoContainer />
                    <LogoContainer />
                    <LogoContainer />
                </div>

                <div className="flex gap-1 justify-center mt-6 mb-5">
                    <AppText>Alredy have an account?</AppText>
                    <Link to={"./signup"} >
                        <Link to={"/login"} >
                            <ColoredText>Login</ColoredText>
                        </Link>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-10 right-10">
                <BiLogoMessenger size={40} />
            </div>
        </section>
    )
}

export default Register