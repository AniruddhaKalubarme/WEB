import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../Component/Header.jsx'
import Footer from '../Component/Footer.jsx'
import Blogs from '../Component/Blogs.jsx'

function CategoryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1).replaceAll('-', ' ');

  return (
    <div>
        <Header/>
        <div className="py-15">
            <button className='border-2 w-16 border-black p-1 rounded-2xl bg-red-100 font-semibold cursor-pointer ml-10' onClick={() => navigate(-1)}>
                back
            </button>
            <h2> Blog tagged: 
            <span> #{category} </span>
            </h2>
        </div>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default CategoryPage