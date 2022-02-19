import React from "react";
import { useState } from "react/cjs/react.development";


const App6 = ()=>{
    const[fullName, setFullName]= useState({
        fname :"",
        lname :"",
    });
    const inFeild = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        setFullName((preValue)=>{
            if(name==="fName"){
                return{
                fname=value,
                lname=preValue.lname,
            };
            }else if(name==="lName"){
                return{
                fname=preValue.fname,
                lname=value,
            };
        }
        });
    };
    const Abc=(event)=>{
        event.preventDefault();
        alert('form submitted')
    };
    return(
        <>
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <h1>fullName.fname</h1>
            <input type={Text}  onChange={inFeild} placeholder="Enter your first Name" name="fName" />
            <br></br>
            <br></br>
            <input type={Text}  onChange={inFeild} placeholder="Enter your last Name"  name="lName" />
            <br></br>
            <br></br>
            <button onSubmit={Abc}>Submit</button>
        </>
    )
}
export default App6;