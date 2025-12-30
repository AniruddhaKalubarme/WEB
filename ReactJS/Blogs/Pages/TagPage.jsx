import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../Component/Header.jsx'
import Footer from '../Component/Footer.jsx'
import Blogs from '../Component/Blogs.jsx'

function TagPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ');

  return (
    <div>
        <Header/>
        <div>
            <button onClick={() => navigate(-1)}>
                back
            </button>
            <h2> Blog tagged: 
            <span> #{tag} </span>
            </h2>
        </div>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default TagPage