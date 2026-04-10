import React from 'react'
import {useState} from 'react'
import { toast } from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {db} from '../firebase.config'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import OAuth from '../components/OAuth'
import '../styles/Auth.css'
import '../styles/OAuth.css'


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const {email, password, name} = formData;
  const navigate = useNavigate();

  function change(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value
    }))
  }

  async function Submit(e){
    e.preventDefault();

    try{
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      
      const user = userCredential.user
      updateProfile(auth.currentUser, {
        displayName:name
      })

      const formDataCopy = {...formData}
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    }
    catch(error){
      toast.error("Something Went Wrong")
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back</p>
        </header>
        <form onSubmit={Submit}>
          <input type="name" className="nameInput" placeholder='Name' id='name' value={name} onChange={change} />
          <input type="email" className="emailInput" placeholder='Email' id='email' value={email} onChange={change} />
          <div style={{ position: 'relative' }}>
            <input type={showPassword ? 'text' : 'password'} className="passwordInput" placeholder='Password' id='password' value={password} onChange={change} />
            <img src={visibilityIcon} alt='showPassword' className='showPassword' onClick={ () => setShowPassword((prevState) => !prevState)} />
          </div>
          <Link to='/forgot-password' className="forgotPasswordLink">Forgot Password</Link>
          <div className='signUpBar'>
            <p className='signUpText'>
              SignUp
            </p>
          </div>
          <button type='submit' className='signUpButton'>
            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' ></ArrowRightIcon>
          </button>
        </form>

        <OAuth></OAuth>
        <Link to='/sign-in' className='registerLink' >Sign In Instead</Link>
      </div>
    </>
  )
}

export default SignUp