import React from "react";

function App(){
    var curDate = new Date(2022, 1, 15, 8);
    curDate = curDate.getHours();
    var greeting = " ";
    const cssStyle = { };

    if(curDate>=1 && curDate<=12){
        greeting="Good Morning";
        cssStyle.color = 'green';
    }else if(curDate>12 && curDate<=19){
        greeting = "Good Afternoon";
        cssStyle.color = 'orange';
    }else{
        greeting = "Good Night"
        cssStyle.color = 'grey';
    }
    return <h1>Hello Sir <span style={cssStyle}>{greeting}</span></h1>
}
export default App