import React from "react";
import { useState } from "react/cjs/react.development";





const App5 =()=>{
    let state = useState();
    const[name, setName] = useState("");
    const[fullName, setFullName] = useState();

    const inputEvent = (event)=>{
    setName(event.target.value)
}

const fnt  = ()=>{
    setFullName(name)
}
    return(
        <>
            <h1>Hello {fullName}</h1>
            <input type={Text} onChange={inputEvent}></input><br></br><br></br>
            <button onClick={fnt}>Submit Here</button>
        </>
    )
}

export default App5;