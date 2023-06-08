/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import Hero from './assets/components/Hero/Hero'
import About from './assets/components/About/About'
import Portfolio from './assets/components/Portfolio/Portfolio'
import Contact from './assets/components/Kontak/Contact'
import Footer from './assets/components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
