import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallary from './pages/gallary/Gallary'
import Notfound from './pages/notfound/Notfound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gallary' element={<Gallary />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='notfound' element={<Notfound />} />
      
        
      </Routes>
    </BrowserRouter>
  )
}

export default App