import React from "react";
import AppText from "../Texts/AppText";
import AppInput from "../Input/Input";
import SolidButton from "../Buttons/SolidButton";

const BusinessProfileForm =()=>{
    return(
        <section>
            <div className={"flex flex-col gap-3 items-center mb-13"}>
                <AppText  className={"font-black text-xl" } >Build Your Business Identity</AppText>
                <AppText>Help us tailor the referral experience by adding key details about your business</AppText>
            </div>

            <div className={"p-2"}>
                <div className={"flex items-center mb-3"}>
                    <AppText>Business Logo</AppText>
                    <input type="file" className={"cursor-pointer border-1 p-3 rounded-lg w-45 border-gray-200 ml-2"} placeholder={"Choose image"}/>
                </div>
                <AppInput containerStyle={"mb-4"} title={"Business Description"} inputStyle={"h-30 placeholder:"} placeholder={"Enter business description"}/>
            </div>
            
            <div className={"grid grid-cols-2 gap-4 mb-5"}>
                <div className={"flex flex-col gap-6"}>
                    <AppInput title={"Business Name"} placeholder={"Enter business name"}/>
                    <AppInput title={"Business Phone No."} placeholder={"Enter phone no"}/>
                    <AppInput title={"Services"} placeholder={"Enter services"}/>
                    <AppInput title={"Services"} placeholder={"Enter business name"}/>
                    <AppInput title={"State Name"} type={"Select"} placeholder={"select"}/>
                </div>
                <div className={"flex flex-col gap-6"}>
                    <AppInput title={"Business Email"} placeholder={"eg. robet.fox@myemail.com"}/>
                    <AppInput title={"Industry"} placeholder={"select"}/>
                    <AppInput title={"Products"} placeholder={"Enter product"}/>
                    <AppInput title={"City"} placeholder={"Select"}/>
                    <AppInput title={"Zip Code"} placeholder={"Enter zip code"}/>
                </div>
            </div>

            <div className={" flex justify w-full px-12"}>
                <SolidButton  text={"Next"} />
            </div>

        </section>
    )
}

export default BusinessProfileForm