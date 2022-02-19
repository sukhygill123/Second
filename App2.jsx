import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const App2 = () => {
    return (
      <>
        <h1 className="heading_style"> List of top 5 Netflix Series in 2020 </h1>
  
        {Sdata.map((netdata) => {
          return (
            <Card
              imgscr={netdata.imgscr}
              sname={netdata.sname}
              title={netdata.title}
              links={netdata.links}
            />
          );
        })}
      </>
    );
  };
  
  export default App2;