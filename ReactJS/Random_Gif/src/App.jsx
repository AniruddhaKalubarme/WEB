import { useState } from 'react'
import Random from '../components/Random'
import Tag from '../components/Tag'


function App() {
  

  return (
    <div
      className='pb-4 relative h-fit w-full bg-cover bg-center bg-no-repeat bg-[url("https://media1.tenor.com/m/9vRAkntogEMAAAAd/background.gif")]'>
        <p className="absolute border-2 border-dark w-[90%] ml-[5%] py-2 mt-5 text-center text-white font-bold bg-white/20">Random GIF'S</p>
      <div className="pt-20">
        <Random/>
      </div>

      <div className="pt-4">
        <Tag />
      </div>
    </div>


  )
}

export default App
