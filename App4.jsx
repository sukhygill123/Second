import React from "react";
import { useState } from "react/cjs/react.development";

const App4=()=>{
    let state = useState();
    let purple = 'purple';
    const [bg,setBg] = useState(purple);
    const [name, setName] = useState('click me');

const bgChange=()=>{
    let newBg = 'yellow';
  
    setBg(newBg)
    setName('wow 🚗🚗')
    // console.log('clicked');
}

const Dbl = ()=>{
    let purple = 'purple';
    setBg(purple)
    setName('Angry 🚑🚑')
}
    return(
    <>
    <div  style={ {backgroundColor : bg } }>
        <button onMouseEnter={bgChange} onMouseLeave={Dbl}>{name}</button>
    </div>
    </>
    )
}

export default App4;