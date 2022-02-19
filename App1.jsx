import react from "react";
import { useState } from "react/cjs/react.development";
const myFName = 'sukhy';
const myLName = 'gill';
const myFlName = 'sukhdeep';

function abc(){
    let name = 'sukh';
    return name;
}

// export default myFName;
// export {myLName,myFlName, abc};



// 🚗Code for Hooks in Reactjs

 
const App1=()=>{
    const [count, setCount]=useState(0);
    const Inc =()=>{
    setCount(count +1)
}
    return(
        <>
            <h1>{count}</h1>
            <button onClick={Inc}>click</button>
        </>
    )
}
export default App1
export {myFName,myLName,myFlName,abc}