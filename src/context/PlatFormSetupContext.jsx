import React, {createContext, useContext, useState} from 'react'
const PlatFormSetupContext = createContext();

export const PlatFormSetupContextProvider =({children})=>{
    const [state , setState] = useState(null)
    const [progress, setProgress] = useState("Not Started");
    function handleState() {
        setProgress("Progress")
    }
    return(
        <PlatFormSetupContext.Provider value={{
            progress,
            setProgress
        }} >
            {children}
        </PlatFormSetupContext.Provider>
    )
}

export const usePlatFormSetup =()=> useContext(PlatFormSetupContext);