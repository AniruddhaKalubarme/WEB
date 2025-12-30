import { useContext } from 'react';

import {userContext} from '../Context/AppContext.jsx'
import Spinner from '../Component/Spinner.jsx'
import BlogDetails from './BlogDetails.jsx';

function Blogs() {
  const {posts, loading} = useContext(userContext);
  return (
    <div className='flex flex-col justify-center items-center pt-10 pb-10'>
    {
      loading ? <Spinner/> :
        posts.length === 0 ? 
          (
            <div>Posts are not available</div>
          ) 
          :
          (
            posts.map((post) => (
              <BlogDetails key={post.id} post={post}/>
            ))
          )
     }

    </div>
  )
}

export default Blogs