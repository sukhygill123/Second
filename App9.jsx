import React from "react";
import { useState } from "react/cjs/react.development";
import ToDo from "./ToDo";

const App9 = ()=>{
    const [addList, setAddList] = useState();
    const [items, setItems] = useState([]);

    const inp = (event)=>{
        setAddList(event.target.value)
    }

    const btn = ()=>{
        setItems((oldList)=>{
            return[...oldList,addList];
        })
        setAddList("")
    }
    const Delete=(id)=>{
        setItems((oldList)=>{
            return oldList.filter((arrElm, index)=>{
                return index!==id;
            })
    })
    
    }
    return(
        <>
            <h1>ToDo List</h1>
            <input  type={Text} value= {addList} onChange={inp} placeholder="Enter an Item"/> 
            <button onClick={btn}>+</button>
            <ul>
                {items.map((items,index)=>{
                    return(<ToDo  key={index} id={index} text={items} onSelect={Delete} />)

                })}
            </ul>
        </>
    )

}

export default App9;