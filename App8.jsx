import React from "react";
import { useState } from "react/cjs/react.development";


const App8 = ()=>{
    const[fullName, setfullName] = useState({
        fname : '',
        lname : '',
        email : '',
    });
    
    const inp = (event)=>{ 
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;
        const email = event.target.email;

        setfullName((preValue)=>{
            if(name==='fName'){
                return{
                fname : value,
                lname : preValue.lname,
                email : preValue.email,
                };
            }else if(name==='lName'){
                return{
                fname : preValue.fname,
                lname : value,
                email : preValue.email,
                };
            }else if(name==='email'){
                return{
                    fname : preValue.fname,
                    lname : preValue.lname,
                    email : value,
                    };
            }
    })
    }
    const onSubmits = (event)=>{
       event.preventDefault();
    }
    return(
        <>
            <form onSubmit={onSubmits}>
                <h1>Hello {fullName.fname} {fullName.lname} </h1>
                <h1>{fullName.email}</h1>
                <input type={Text} placeholder="Enter Your Name" name="fName" onChange={inp} value={fullName.fname} />
                <br></br><br></br>
                <input type={Text} placeholder="Enter Your Name" name="lName" onChange={inp} value={fullName.lname} />
                <br></br><br></br>
                <input type={Text} placeholder="Enter Your Email" name="email" onChange={inp} value={fullName.email} />
                <br></br><br></br>
                <button type="submit">Click Me</button>
            </form>
        </>
    )
}
export default App8;