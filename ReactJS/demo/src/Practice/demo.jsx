// import React from 'react'
// import Vaibhav from './vaibhav'
import Feedback from './Feedback'
import { Route, Routes } from 'react-router-dom'

const Demo = () => {
  return (
    <Routes>
      {/* <Route path='/' element='This is base path'/>
      <Route path='/demo' element={<Vaibhav/>}/> */}
      <Route path='/' Component={Feedback} />
    </Routes>
  )
}

export default Demo