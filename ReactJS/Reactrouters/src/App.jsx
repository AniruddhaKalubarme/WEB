import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Support from '../components/Support'
import NotFound from '../components/NotFound'

function App() {

  return (
    <div>
      <nav>
        <NavLink to='/'> HOME</NavLink>
        <NavLink to='/about'> About</NavLink>
        <NavLink to='/support'> support</NavLink>
      </nav>


      <navbar>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/support' element={<Support/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </navbar>
    </div>
  )
}

export default App
