import React, {createContext, useContext, useState} from 'react'
import { useNavigate } from "react-router";

const PlatFormSetupContext = createContext();

export const PlatFormSetupContextProvider =({children})=>{
    const [ currentState , setCurrentState ] = useState("cusData")
    const [progress, setProgress] = useState("Not Started");

    // const navigator = useNavigate()
    function changeData() {
        setCurrentState("cusData")
    }

    return(
        <PlatFormSetupContext.Provider value={{
            progress,
            setProgress,
            changeData,
            currentState,
        }} >
            {children}
        </PlatFormSetupContext.Provider>
    )
}

export const usePlatFormSetup =()=> useContext(PlatFormSetupContext);