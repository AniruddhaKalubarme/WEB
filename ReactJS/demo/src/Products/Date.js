import "./Date.css";

function Date(props)
{
    const obj = {
        name:"sharanya",
        sname:"kalubarme"
    }

    props.NameDemo(obj);

    return (
        <div className="Date">
            <p>{props.day}</p>
            <p>{props.month}</p>
            <p>{props.year}</p>
        </div>
    )
}

export default Date;