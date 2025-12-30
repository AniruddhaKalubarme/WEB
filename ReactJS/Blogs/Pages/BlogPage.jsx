import React from 'react'
import Header from '../Component/Header.jsx'
import Blogs from '../Component/Blogs.jsx'
import Footer from '../Component/Footer.jsx'
import { useLocation, useNavigate} from 'react-router-dom';
import {userContext} from '../Context/AppContext.jsx';
import { useContext, useState, useEffect } from 'react';
import Spinner from '../Component/Spinner.jsx';
import BlogDetails from '../Component/BlogDetails.jsx';

function BlogPage() {
  let url = "https://codehelp-apis.vercel.app/api/get-blog";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, setLoading } = useContext(userContext);
  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let baseUrl = url + `?blogId=${blogId}`;
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      setBlog(data.blog);
      console.log("Blog data: "+data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      alert("Failed to fetch blog data");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if(blogId){
      fetchRelatedBlogs();
    }
}, [location.pathname])


  return (
    <div>
      <Header/>
      <div className="py-15">
        <div>
          <button className='border-2 w-16 border-black p-1 rounded-2xl bg-red-100 font-semibold cursor-pointer ml-10' onClick={() => navigate(-1)}>
              back
          </button>
        </div>
        {
          loading ? <div><Spinner/></div> : 
          (
            blog ? 
            (
              <div>
                <BlogDetails post={blog}/>
                <h2 className='border-2 w-fit border-black p-1 rounded-2xl bg-red-100 font-semibold ml-10' >Related blogs</h2>
                {
                  relatedBlogs.map((post) => (
                    <div key={post.id}>
                      <BlogDetails post={post}/>
                    </div>
                  ))
                }
              </div>
            )
            :
            (
              <h2>No blog found</h2>
            )
          )
        }

      </div>
    </div>

  )
}

export default BlogPage