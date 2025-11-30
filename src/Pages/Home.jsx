import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Team from '../components/Team'
import Plans from '../components/Plans'
import Hero from '../components/Hero'
import { Element } from "react-scroll";



const Home = () => {
  return (
    <div>
      <Navbar />

      <Element name="hero">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="plans">
        <Plans />
      </Element>

      <Element name="team">
        <Team />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default Home;