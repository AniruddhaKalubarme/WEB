import React, {useState} from "react";

import "./Name.css"
import Date from "./Date";

const Name = (props) => 
{
    const [title, setTitle] = useState(props.name);

    function NameDemoFun(obj)
    {
        console.log("Inside the Name.js => ", obj);
        props.AppDemo(obj);
    }

    function clickHandler()
    {
        console.log("Click handler is working..");
        setTitle("popcorn");
    }

    return(
        <div className="Name">
            <Date NameDemo={NameDemoFun} ></Date>
            <Date day="30" month="December" year="2005" />
            {title}
            <button onClick={clickHandler}>Add to Card</button>
        </div>
    );
}


export default Name;