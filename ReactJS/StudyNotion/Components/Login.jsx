import {NavLink, useNavigate} from 'react-router-dom'
import {useState} from 'react'

export default function Login(props)
{
    const [showPass, setShowPass] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function checkDetails()
    {
        console.log(props.UserDetails);
        if(props.UserDetails.has(userName))
        {
            if(props.UserDetails.get(userName) === password)
            {
                return true;
            }
            else
            {
                alert("Invalid Password");
                return false;
            }
        }
        else
        {
            alert("Invalid user name")
            return false;
        }
    }

    function setLogin()
    {
        let chk = checkDetails();
        if(chk === true)
        {
            props.setLogin(true);
            navigate('/Home');
        }
        else
        {
            props.setLogin(false);
            navigate('/login');
        }
    }


    function userHandle(e) {
        const { name, value } = e.target;
        if (name === "user") setUserName(value);
        else setPassword(value);
    }



    return (
        <div className="px-20 text-white flex flex-column justify-around items-center pt-10">
            <div className="flex flex-col items-center">
                <div className="module">
                    <h2 className="text-2xl font-bold text-yellow-200">Welcome Back</h2>
                    <br/>
                    <p className="text-sm font-semibold text-blue-200">Build skills for today, tomorrow and beyond</p>
                    <p className="text-sm font-semibold text-blue-300">Education to future-proof your career</p>
                </div>

                <br/>

                <div>
                    <label className="font-semibold  text-sm">Email Address</label>
                    <br/>
                    <input name="user" onChange={userHandle} className="font-semibold text-sm px-4 py-2 border-2 rounded-sm w-90" type="email" placeholder="Enter email address"></input>

                    <br/>
                    <br/>
                    <div className="flex flex-col gap-1 w-full">
                        <label className="font-semibold text-sm">Enter Password</label>

                        <div className="relative">
                            <input
                                name = "pass"
                                onChange={userHandle}
                                type={showPass ? "text" : "password"}
                                className="font-semibold text-sm px-4 py-2 border-2 rounded-sm w-full pr-12"
                                placeholder="Enter Password"
                                /> 

                            {/* Eye Icon */}
                            <span
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300 hover:text-white">
                                {showPass ? "👁️" : "👁️‍🗨️"}
                            </span>
                        </div>

                        <div className="flex justify-end mt-1">
                            <NavLink className="text-blue-400 font-semibold" to="/">
                                Forgot Password
                            </NavLink>
                        </div>
                    </div>
                </div>



                <br/>
                <button onClick={setLogin} className="border-2 rounded-sm px-4 py-2 bg-white/20 active:scale-95 transition-transform cursor-pointer font-semibold">Log in</button>

                <div className="flex items-center gap-4 my-4 w-full">
                    <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                    <span className="text-gray-300 font-semibold">or</span>
                    <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                </div>




                <button className="flex gap-2 items-center border-2 rounded-sm px-4 py-2 bg-white/20 active:scale-95 transition-transform cursor-pointer font-semibold">
                    <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt='Google_img' width="35px"></img>
                    Sign in with Google
                </button>
            </div>

            <div>
                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg" alt="Stud_img" width="500px"></img>
            </div>
        </div>
    )
}