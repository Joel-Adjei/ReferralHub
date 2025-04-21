import React from 'react';
import AppText from "../Texts/AppText";

const AppInput =({placeholder, type, containerStyle, title, inputStyle , ...props})=>{
    return(
        <div className={containerStyle}>
            <AppText >{title}</AppText>
            <input type={type} className={`w-full p-2 border-gray-200 border-1 rounded-lg ${ inputStyle}`} placeholder={placeholder} {...props}/>
        </div>
    )
}
export default AppInput