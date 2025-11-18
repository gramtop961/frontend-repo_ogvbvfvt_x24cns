import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ClientsMarquee from '../components/ClientsMarquee'
import Services from '../components/Services'
import Branding from '../components/Branding'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ClientsMarquee />
        <Services />
        <Branding />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home
