import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Marqee from './Components/Marqee'
import Approach from './Components/Approach'
import Eyes from './Components/Eyes'
import Cards from './Components/Cards'
import Project from './Components/Project'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Nav />
      <Hero />
      <Marqee />
      <Approach />
      <Eyes />
      <Cards />
      <Project/>
      <Footer/>
    </>
  )
}

export default App