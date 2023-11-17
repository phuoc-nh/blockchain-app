import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Services from './components/Services'
import Transaction from './components/Transaction'

function App() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome></Welcome>
      </div>
      <Services></Services>
      <Transaction></Transaction>
      <Footer></Footer>
    </div>
  )
}

export default App
