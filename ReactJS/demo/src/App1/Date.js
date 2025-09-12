import "./Date.css"

function Date(props)
{
    return (
        <div>
            <p> {props.day} {props.month} {props.year}</p>
            {props.children}
        </div>
    )
}

export default Date;