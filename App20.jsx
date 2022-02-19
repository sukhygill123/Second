import React from "react";
import App21 from "./App21";


const App20=()=> {
    const abc = {name:"honda", brand:"suzuki", model:"honda"};
    return (
      <>
          <h1>Who lives in my garage?</h1>
          <App21 name= {abc} />
      </>
    );
  }
export default App20;