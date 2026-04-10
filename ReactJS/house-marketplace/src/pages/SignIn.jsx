import React from 'react'
import {useState} from 'react'
import { toast } from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
// import firebase from 'firebase/compat/app';
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../components/OAuth'
import '../styles/Auth.css'
import '../styles/OAuth.css'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const {email, password} = formData;
  const navigate = useNavigate();

  function change(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value
    }))
  }

  async function handleSubmit(e){
    e.preventDefault();
    try{
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      
      if(userCredential.user)
      {
        navigate('/')
      }
    }
    catch(error)
    {
      toast.error("Invalid user Credentials")
    }

  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back</p>
        </header>
        <form onSubmit={handleSubmit}>
          <input type="email" className="emailInput" placeholder='Email' id='email' value={email} onChange={change} />
          <div style={{ position: 'relative' }}>
            <input type={showPassword ? 'text' : 'password'} className="passwordInput" placeholder='Password' id='password' value={password} onChange={change} />
            <img src={visibilityIcon} alt='showPassword' className='showPassword' onClick={ () => setShowPassword((prevState) => !prevState)} />
          </div>
          <Link to='/forgot-password' className="forgotPasswordLink">Forgot Password</Link>
          <div className='signInBar'>
            <p className='signInText'>
              SignIn
            </p>
          </div>
          <button type='submit' className='signInButton'>
            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' ></ArrowRightIcon>
          </button>
        </form>

        <OAuth></OAuth>
        <Link to='/sign-up' className='registerLink' >Sign Up Instead</Link>
      </div>
    </>
  )
}

export default SignIn