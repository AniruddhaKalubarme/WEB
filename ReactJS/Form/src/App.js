import "./App.css";
import {useState} from "react";
function App() {

  const [formData, setData] = useState({fname:"", lname:"", email:"", country:"", Address:"", noti:"", city:"", state:"", post:"", job:"", offer:""})

  function formDataHandler(event)
  {
    let obj = event.target;
    setData( (prev) => ({
      ...prev,
      [obj.name]: obj.type == "checkbox" ? obj.checked : obj.value
    }))

    console.log(formData);
  }

  return (
    <div className="w-full text-[12px] overflow-x-hidden">
      <div className="place-self-center p-4">
        <form>
          <label> First Name </label>
          <br></br>
          <input value={formData.fname} placeholder="aniruddha" name="fname" onChange={formDataHandler} className="border-[2px] border-blue-300 px-2 py-1 w-full"></input>
          <br></br>

          <label> Last Name </label>
          <br></br>
          <input value={formData.lname} placeholder="Kalubarme" name="lname" onChange={formDataHandler} className="border-[2px] border-blue-300 px-2 py-1 w-full"></input>
          <br></br>

          <label> Email Address </label>
          <br></br>
          <input value={formData.email} type="email" name="email" onChange={formDataHandler} placeholder="abc@gmail.com" className="border-[2px] border-blue-300 px-2 py-1 w-full"></input>
          <br></br>

          <label>Country</label>
          <br></br>
          <select onChange={formDataHandler} value={formData.country} name="country" className="px-2 py-1 border-[2px] border-blue-300 w-full">
            <option className="border-[2px] border-blue-300">India</option>
            <option className="border-[2px] border-blue-300">Nepal</option>
            <option className="border-[2px] border-blue-300">China</option>
            <option className="border-[2px] border-blue-300">Russia</option>
          </select>
          <br></br>

          <label> Street Address </label>
          <br></br>
          <input onChange={formDataHandler} value={formData.Address} name="Address" type="text" placeholder="123 house-no gulli" className="border-[2px] border-blue-300 px-2 py-1 w-full"></input>
          <br></br>

          <label> City </label>
          <br></br>
          <input onChange={formDataHandler} value={formData.city} name="city" type="text" placeholder="talegavon" className="border-[2px] border-blue-300 px-2 py-1 w-full"></input>
          <br></br>

          <label> State </label>
          <br></br>
          <input onChange={formDataHandler} value={formData.state} name="state" type="text" placeholder="Maharastra" className="border-[2px] border-blue-300 px-2 py-1 w-full"></input>
          <br></br>

          <label> Pin-Code </label>
          <br></br>
          <input onChange={formDataHandler} value={formData.pin} name="pin" type="number" placeholder="Maharastra" className="border-[2px] border-blue-300 px-2 py-1 w-full"></input>
          <br></br>
          <br></br>

          <strong>By Email</strong>
          <br/>

          <div className="flex gap-2">
            <input name="post" id="post" type="checkbox" value={formData.post} onClick={formDataHandler}></input>
            <label htmlFor="post">
                <strong>Comments</strong>
                <br></br>
                Get notified when someones posts a comment on a posting.
            </label>
          </div>

          <br></br>

          <div className="flex gap-2">
            <input name="job" id="job" type="checkbox" value={formData.job} onClick={formDataHandler}></input>
            <label htmlFor="job">
              <strong>Candidates</strong>
              <br></br>
              Get notified when a candidate applies for a job.
            </label>
          </div>

          <br></br>

          <div className="flex gap-2">
            <input name="offer" id="offer" type="checkbox" value={formData.offer} onClick={formDataHandler}></input>
            <label htmlFor="offer">
              <strong>Offers</strong>
              <br></br>
              Get notified when a candidate accepts or rejects an offer.
            </label>
          </div>

          <br></br>
          <br></br>

          <div>
            <strong>Push Notifications</strong>
            <br></br>
            These are delivered via SMS to your mobile phone.

            <br></br>
            
            <div className="flex gap-2">
              <input type="radio" name="noti" id="noti1"></input>
              <label htmlFor="noti1"><strong>Everything</strong></label>
              <br></br>
            </div>

            <div className="flex gap-2">
              <input type="radio" name="noti" id="noti2"></input>
              <label htmlFor="noti2"><strong>Same as email</strong></label>
              <br></br>
            </div>

            <div className="flex gap-2">
              <input type="radio" name="noti" id="noti3"></input>
              <label htmlFor="noti3"><strong>No push notification</strong></label>
            </div>
          </div>

          <button type="submit" className="mt-4 px-2 py-1 bg-blue-500 rounded-[4px] text-white font-bold">Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
