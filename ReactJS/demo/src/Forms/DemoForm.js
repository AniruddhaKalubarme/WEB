import {useState} from 'react'

function DemoForm()
{
    /*
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');

    function fNameHandler(event)
    {
        setfName(event.target.value);
        console.log(fName);
    }

    function lNameHandler(event)
    {
        setlName(event.target.value);
        console.log(lName);
    }
    */

    const [formData, nameHandler] = useState({fName:"", lName:"", email:"", chk:false, mode:"Online-mode", favCar:""});

    function Handler(event)
    {
        let fields = event.target
        nameHandler(prevData => {
            const newData = {
                ...prevData,
                [fields.name]: fields.type == "checkbox" ? fields.checked : fields.value
            }
            console.log(newData);
            return newData;
        })

    }

    function subHandler()
    {
        console.log("Printing final values");
        console.log(formData)
    }

    return(
        <div> 
            <form onSubmit={subHandler}>
                {/* <input placeholder="fname" onChange={fNameHandler}></input>
                <input placeholder="lname" onChange={lNameHandler}></input> */}

                <input placeholder="fname" onChange={Handler} name="fName" value={formData.fName}></input>
                <input placeholder="lname" onChange={Handler} name="lName" value={formData.lName}></input>
                <input placeholder="email" onChange={Handler} name="email" value={formData.email}></input>
                <input type="checkbox" id="isVisible" onChange={Handler} name="chk" value={formData.chk}></input>
                <label htmlFor="isVisible">Is visible</label>

                <input type="radio" value="Online-mode" id="Online-mode" name="mode" checked={formData.mode === "Online-mode"} onClick={Handler}></input>
                <label htmlFor="Online-mode">Online</label>

                <input type="radio" value="Offline-mode" id="Offline-mode" name="mode" checked={formData.mode === "Offline-mode"} onClick={Handler}></input>
                <label htmlFor="Offline-mode">Offline</label>

                <select name="favCar" value={formData.favCar} onChange={Handler}>
                    <option >bollero</option>
                    <option>scarpio</option>
                    <option>audi</option>
                </select>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default DemoForm;

    