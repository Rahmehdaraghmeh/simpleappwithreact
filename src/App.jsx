
import React from 'react'
import Navbar from './component/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';

import First from './component/First'
import Portfolio from './component/Portfolio'
import About from './component/About'
import Contacts from './component/Contacts'
import Footer from './component/Footer'


export default function App() {
  return (
    <div>
      <Navbar/>
      <First/>
      <Portfolio/>
      <About/>
      <Contacts/>
      <Footer/>
    </div>
  )
}
