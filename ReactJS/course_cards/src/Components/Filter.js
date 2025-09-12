import './Filter.css'
import {useState} from 'react';

const Filter = ({FilterData, category, setCategory}) => {

    const [selected, setSelected] = useState("All");
    
    function FilterHandler(title)
    {
        setSelected(title);
        setCategory(title);
    }

    return (
        <div className="btn-panel">
            {FilterData.map((data)=>{
                return (<button className={`btn ${selected === data.title ? "active" : ""}`} onClick={() => FilterHandler(data.title)}> {data.title} </button>)
            })}
        </div>
    )
}

export default Filter;