import React from "react";
import { useState } from "react/cjs/react.development";
import AddIcon from '@material-ui/icons/Add';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const App10=()=>{
    const [num, setNum] = useState(0)
    const btn1 = ()=>{
        setNum(num+1)
        }
        const btn2 =()=>{
            if(num>0){
            setNum(num-1)
        }else{
            alert('Reached lowest limit')
            setNum(0)
        }}
    return(
        <>
            <h1>{num}</h1><br></br>
            <br></br>
            <Tooltip title="Delete">
                <Button onClick={btn1}><AddIcon /></Button>
            </Tooltip>
              <button onClick={btn2}>Decrement</button>
        </>
    )
}
export default App10;