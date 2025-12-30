import React, { useContext } from 'react'
import { userContext } from '../Context/AppContext'

export default function Footer() {

  const { page, totalPage, handlePageChange } = useContext(userContext);

  return (
    <div className='flex justify-center items-center gap-5 fixed left-0 bottom-0 w-screen bg-red-50 px-0 py-1 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]'>
      <div className='text-sm flex justify-center items-center gap-10'>
        {
          page > 1 &&
          <button className='border-2 border-black p-1 rounded-2xl bg-red-100 font-semibold cursor-pointer' onClick={() => handlePageChange(page - 1)}>
            Previous
          </button>
        }
        <div>
          Page <span className='font-semibold'> {page} </span> of <span className='font-semibold'> {totalPage} </span>
        </div>
        {
          page < totalPage &&
          <button className='border-2 w-16 border-black p-1 rounded-2xl bg-red-100 font-semibold cursor-pointer' onClick={() => handlePageChange(page + 1)}>
            Next
          </button>
        }
      </div>
      
    </div>

  )
}
