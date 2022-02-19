import react from "react";
import { useState } from "react/cjs/react.development";



const App3 =()=>{
    let newtime = new Date().toLocaleTimeString();
    let state = useState();
    let [cTime, setCTime] = useState(newtime);
    

const fnt = ()=>{
    newtime = new Date().toLocaleTimeString();
    setCTime(newtime)
}
    // newtime.getHours();
    return(<>
        <h1>{cTime}</h1>
        <button onClick={fnt}>Get Time</button>
    </>)
   
}
export default App3