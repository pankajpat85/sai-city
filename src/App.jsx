import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Location from './components/Location'
import Amenities from './components/Amenities'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <About />
      <Location />
      <Amenities />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
