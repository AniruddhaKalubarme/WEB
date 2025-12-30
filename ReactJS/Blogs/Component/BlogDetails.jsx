import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({post}){
  return (
    <div>
      <div className="w-[60%] border-2 p-4 m-4 bg-amber-50 flex flex-col justify-center items-center">
        <NavLink to={`/blog/${post.id}`} className="font-bold text-xl">{post.title}</NavLink>
        <p> By <span className="font-semibold underline"> {post.author} </span> on <NavLink to={`/category/${post.category.replaceAll(" ", "-")}`}>{post.category}</NavLink></p>
        <p> Posted On {post.date}</p>
        <br></br>
        <p>{post.content}</p>
        <div>
          {post.tags.map((tag, index) => {
            return <NavLink to={`/tag/${tag.replaceAll(" ", "-")}`} className='text-blue-700' key={index}>{`#${tag} `}</NavLink>
          } )}
        </div>
      </div>
    </div>
  )
}

export default BlogDetails