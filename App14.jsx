import React, { createContext } from "react";
import AppC from "./AppC";

const FirstName = createContext();
const LastName = createContext();
const SurName = createContext();

const App14 =()=>{
    return(<>
        <FirstName.Provider value={"Sukhdeep"}>
        <LastName.Provider value={"Singh"}>
        <SurName.Provider value={"Gill"}>
        <AppC />
        </SurName.Provider>
        </LastName.Provider>           
        </FirstName.Provider>
        </>)
}
export default App14
export {FirstName, LastName, SurName}