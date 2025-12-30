import { useContext, useEffect } from "react";
import { userContext } from "../Context/AppContext.jsx";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import Blogs from "../Component/Blogs.jsx";
import BlogPage from "../Pages/BlogPage.jsx";
import CategoryPage from "../Pages/CategoryPage.jsx";
import TagPage from "../Pages/TagPage.jsx";

function App() {
  console.log("App component rendered");
  const { fetchPosts } = useContext(userContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get('page') ?? 1;

    if (location.pathname.includes('tags')) {
      const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ');
      fetchPosts(page, tag, null);
    }
    else if (location.pathname.includes('category')) {
      const category = location.pathname.split('/').at(-1).replaceAll('-', ' ');
      fetchPosts(page, null, category);
    }
    else {
      fetchPosts(page, null, null);
    }
  }, [location.pathname, location.search])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={
          <div>
            <Header/>
            <Blogs/>
            <Footer/>
          </div>
        } />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/tag/:tag' element={<TagPage />} />
      </Routes>
    </div>
  )
}

export default App
