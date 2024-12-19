
import React from 'react'
import Navbar from './component/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';

import First from './component/First'
import Portfolio from './component/Portfolio'
import About from './component/About'
import Contacts from './component/Contacts'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<First/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contacts/>}></Route>



      </Routes>
    
      <Footer/>
    </div>
  )
}
