import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Features from './components/Features'
import WhatYouGet from './components/WhatYouGet'
import TakeAction from './components/TakeAction'
import SampleReport from './components/SampleReport'
import Comparison from './components/Comparison'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />
      <Hero />
      <Pricing />
      <WhatYouGet />
      <TakeAction />
      <SampleReport />
      <Comparison />
      <Footer />
    </div>
  )
}

export default App
