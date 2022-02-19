import React from "react";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import User from "./User";
import { Route, Routes, BrowserRouter, Link, useParams} from "react-router-dom";

const App18 =()=>{
    return(
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<Error/>} />
                <Route path="/user" element={<User />} />
                <Route path="/user/:fname" element={<User />} />
            </Routes>


        </> 
    )
}
export default App18;