import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import HeroSlide from './components/HeroSlide'
import ModelsSection from './components/ModalSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSlide/>
    <ModelsSection/>
    <Footer/>
    </>
  )
}

export default App