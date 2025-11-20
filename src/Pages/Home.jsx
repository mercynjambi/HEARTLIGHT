import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Team from '../components/Team'
import Plans from '../components/Plans'
import Hero from '../components/Hero'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Plans/>
        <Contact/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home