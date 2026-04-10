import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import '../styles/Auth.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const onChange = (e) => {
    setEmail(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try{
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email)
      toast.success("Email was sent")
    }
    catch(error){
      toast.error("Something error occured")
    }
  }
  return (
    <div className='pageContainer' >
      <header>
        <p className='pageHeader' > Forgot Password </p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input type="email" value={email} onChange={onChange} placeholder='Email' id='email' className="emailInput" />

          <Link className='forgotPasswordLink' to='/sign-in' >Sign In</Link>

          <div className="signInText">Send Reset Link</div>
          <button className="signInButton"><ArrowRightIcon fill='#ffffff' width='34px' height='34px'/></button>
        </form>
        
        <p style={{marginTop: '20px', fontSize: '14px', color: '#666'}}>
          💡 Tip: Check your spam/junk folder if you don't see the email
        </p>
      </main>

    </div>
  )
}

export default ForgotPassword