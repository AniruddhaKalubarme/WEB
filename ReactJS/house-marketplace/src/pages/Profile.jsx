import {useState, useEffect} from 'react'
import {getAuth, updateProfile} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import {updateDoc, doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'
import '../styles/Profile.css'


function Profile (){
  const navigate = useNavigate();
  const auth = getAuth()  
  const [changeDetails, setChangeDetails] = useState(false)

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const onLogout = () => {
    auth.signOut()
    navigate('/sign-in')
  }

  const userRef = doc(db, 'users', auth.currentUser.uid)
  updateDoc(userRef, {
    name : formData.name
  })

  async function onSubmit(){
    try{
      if(auth.currentUser.displayName !== formData.name)
      {
        await updateProfile(auth.currentUser , {
          displayName : formData.name
        })

        toast.success("Update successfully")
      }
    
    }
    catch(err)
    {
      toast.error("Failed to save Details")
    }
  }

  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
  }


  
  return (
    <>
      <div className="profile">
        <header className="profileHeader">
          <p className="pageHeader">My Profile</p>
          <button className="logOut" type='button' onClick={onLogout} >Logout</button>
        </header>

        <main>
          <div className="profileDetailsHeader">
            <p className="profileDetailsText">Personal Details</p>
            <p className="changePersonalDetails" onClick={()=>{
              changeDetails && onSubmit()
              setChangeDetails( (prevState) => !prevState)
            }}>
              {changeDetails ? "Done" : "Change"}
            </p>

            <div className="profileCard">
              <form>
                <input type="text" id="name" className={!changeDetails ? 'profileName' : 'profileNameActive'} disabled={!changeDetails} value={formData.name} onChange={onChange} />
                <input type="email" id="email" className={!changeDetails ? 'profileEmail' : 'profileEmailActive'} disabled={!changeDetails} value={formData.email} onChange={onChange} />
              </form>
            </div>
          </div>
          <Link to='/create-listing' className='createListing'>
            <img src={homeIcon} alt='home'></img>
            <p>Sell or rent your home</p>
            <img src={arrowRight} alt='arrow right'/>
          </Link>
        </main>
      </div>
    </>
  )
}

export default Profile