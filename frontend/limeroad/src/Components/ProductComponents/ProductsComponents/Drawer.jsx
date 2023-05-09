import React, { createContext, useContext } from 'react'

export const DrawerdataContext=createContext();
export const DrawerdataProvider=({children})=>{
    const [data,setdata]=React.useState([]);
    const [loading,setload]=React.useState("");
    return(
        <DrawerdataContext.Provider value={{data,setdata,loading,setload}}>
        {children}
    </DrawerdataContext.Provider >
    )
}
