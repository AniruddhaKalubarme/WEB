import Home from '../Components/Home'
import Default from '../Components/Default'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import {useState} from 'react'
import {NavLink, Routes, Route} from 'react-router-dom';

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [UserDetails, setUserDetails] = useState(new Map());

    function setLogine()
    {
      setLogin(false);
    }

  return (
    <div className="wrapper bg-black p-4 px-10 h-screen">
      <nav className="text-white flex justify-between items-center">
      <NavLink to="/"><img src="../Images/logo.png"></img></NavLink>
        
        <div className="flex gap-8 text-[20px] ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Support</NavLink>
          <NavLink to="/">About</NavLink>
        </div>


      {
        isLoggedIn === false
         ?
        <div className="flex gap-8">
          <NavLink to='Login' className="border-2 rounded-lg px-4 py-2 bg-white/20 active:scale-95 transition-transform cursor-pointer font-semibold">Login</NavLink>
          <NavLink to='SignUp' className="border-2 rounded-lg px-4 py-2 bg-white/20 active:scale-95 transition-transform cursor-pointer font-semibold">Signup</NavLink>
        </div>
         :
        <div className="flex gap-8">
          <NavLink to='/' className="border-2 rounded-lg px-4 py-2 bg-white/20 active:scale-95 transition-transform cursor-pointer font-semibold">Dashboard</NavLink>
          <NavLink to='login' onClick={setLogine} className="border-2 rounded-lg px-4 py-2 bg-white/20 active:scale-95 transition-transform cursor-pointer font-semibold">Logout</NavLink>
        </div>
      }
        
      </nav>


      <div className="">
        <Routes>
          <Route path='/' element={<Default/>}/>
          <Route path='/Login' element={<Login isLoggedIn={isLoggedIn} setLogin={setLogin} UserDetails={UserDetails}/>}/>
          <Route path='/SignUp' element={<SignUp  isLoggedIn={isLoggedIn} setLogin={setLogin} UserDetails={UserDetails} setUserDetails={setUserDetails}/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
