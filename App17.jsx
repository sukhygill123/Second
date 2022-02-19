import React from "react";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import User from "./User";
import { Route, Routes, BrowserRouter, Link} from "react-router-dom";

const App17 =()=>{
    return(
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<Error/>} />
                <Route path="/user/:fname" element={<User />} />
            </Routes>

        </> 
    )
}
export default App17;