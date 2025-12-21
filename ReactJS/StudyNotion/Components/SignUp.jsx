import {useState, useEffect} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

export default function SignUp(props)
{
    const [toggle, setToggle] = useState(1);
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Updated Map:", props.UserDetails);
    }, [props.UserDetails]);

    function addUser()
    {
        props.setUserDetails(prevMap => {
            const newMap = new Map(prevMap);
            newMap.set(userName, password);
            return newMap;
        });

        props.setLogin(true);
        navigate('/Home');

    }

    function userHandle(e) {
        const { name, value } = e.target;

        if (name === "user") setUserName(value);
        else setPassword(value);
    }


    function toggleHandler(e)
    {
        if(e.target.name == 'stud')
            setToggle(1);
        else
            setToggle(2);
    }

    return (
        <div className="px-20 text-white flex flex-column justify-around items-center pt-5 gap-50">
            <div className="flex flex-col w-100">
                <div className="module">
                    <h2 className="text-2xl font-bold text-green-300">Join the millions leearnign to code with StudyNotion for free</h2>
                    <p className="mt-1 text-sm font-semibold text-blue-200">Build skills for today, tomorrow and beyond</p>
                    <p className="text-sm font-semibold text-blue-300">Education to future-proof your career</p>
                </div>

                <div className="flex w-60 bg-white/20 p-1 rounded-full mt-4">
                    <button name="stud" className={`cursor-pointer flex-1 px-2 py-1 rounded-full font-semibold transition-all active:scale-95 ${toggle === 1 ? "bg-white/20" : ""}`} onClick={toggleHandler}>
                        Student
                    </button>

                    <button name="inst" className={`cursor-pointer flex-1 px-2 py-1 rounded-full ${toggle == 2 ? "bg-white/20" : ""} text-white font-semibold transition-all active:scale-95`} onClick={toggleHandler}>
                        Instructor
                    </button>
                </div>

                <div className="flex mt-4 gap-4 w-full justify-around">
                    <div>
                        <label className="font-semibold  text-sm">First Name</label>
                        <input className="font-semibold text-sm px-2 py-1 border-2 rounded-lg w-42" type="text" placeholder="Enter First Name"></input>
                    </div>

                    <div>
                        <label className=" text-sm font-semibold">Last Name</label>
                        <input className="font-semibold text-sm px-2 py-1 border-2 rounded-lg w-42" type="text" placeholder="Enter Last Name"></input>
                    </div>
                </div>

                <div className="mt-2">
                    <label className="mt-2 font-semibold  text-sm">Email Address</label>
                    <br></br>
                    <input name="user" onChange={userHandle} className="font-semibold text-sm px-2 py-1 border-2 rounded-lg w-full mb-2" type="email" placeholder="Enter email address"></input>
                    <br></br>
                    <label className="text-sm font-semibold">Enter Password</label>
                    <br></br>
                    <input name="pass" onChange={userHandle} className="font-semibold text-sm px-2 py-1 border-2 rounded-lg w-full" type="password" placeholder="Enter Password"></input>

                    <div className="flex justify-end w-full">
                        <NavLink className="text-blue-400 text-sm font-semibold" to='/'>Forgot Password</NavLink>
                    </div>
                </div>

                <br/>
                <button onClick={addUser} className="text-sm border-2 rounded-lg py-2 bg-white/20 active:scale-95 transition-transform cursor-pointer font-semibold w-30 place-self-center flex justify-center items-center"> Sign in </button>

                <div className="flex items-center gap-4 my-1 w-full text-sm">
                    <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                    <span className="text-gray-300 font-semibold">or</span>
                    <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                </div>

                <button className="text-sm flex gap-2 items-center border-2 rounded-lg px-2 py-1 bg-white/20 active:scale-95 transition-transform cursor-pointer font-semibold w-fit place-self-center">
                    <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt='Google_img' width="25px"></img>
                    Sign in with Google
                </button>
            </div>

            <div>
                <img src="https://img.freepik.com/premium-photo/smiling-student-holding-books_53876-224553.jpg" alt="Stud_img" width="500px"></img>
            </div>
        </div>
    )
}