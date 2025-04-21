import React from 'react'
import {Link, useNavigate} from 'react-router'
import OutlineButton from "../components/Buttons/OutlineButton";
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
const Login = () => {
    const navigator = useNavigate()

    return (
        <section className={`px-20 py-5 bg-grey-200 flex flex-col items-center`}>
            <AppText className={`text-3xl font-bold mb-9`}> Login to Referral Hub </AppText>

           <div className={`w-150 px-25 pt-15 pb-5 rounded-lg bg-white`}>
               <OutlineButton className="mb-4" onClick={()=> console.log("clicked")} text={`Continue with Google/Microsoft`} />

               {/*Magic Link Login*/}
               <div className={"py-5"}>
                   <AppInput containerStyle={"mb-5"} placeholder={"Enter your email"} title="Magic Link Login" />
                   <SolidButton text={"Send Magic Link"} />
               </div>

               <Or />

               <div>
                   <AppInput containerStyle={"mb-5"} placeholder={"robert.fox@myemail.com"} title="Email" />
                   <AppInput containerStyle={"mb-2"} placeholder={"Enter password"} title="Password" />
                   <div className={`flex w-full justify-between mb-4 py-2`}>
                       <div className="flex">
                           <input className="w-2" type="check-box"/>
                           <AppText className={"ml-3"}>Remember Me</AppText>
                       </div>
                       <ColoredText>Forgot password?</ColoredText>
                   </div>
                   <SolidButton text={"Login"} onClick={()=> navigator("/business")} />
               </div>

               <Or />

               {/*Logos*/}
               <div className="flex gap-3 justify-center">
                   <LogoContainer />
                   <LogoContainer />
                   <LogoContainer />
                   <LogoContainer />
               </div>

               <div className="flex gap-1 justify-center mt-6">
                   <AppText>Don't have an account?</AppText>
                   <Link to={"/Register"} >
                       <ColoredText>Register now</ColoredText>
                   </Link>
               </div>
           </div>

        </section>
    )
}

export default Login