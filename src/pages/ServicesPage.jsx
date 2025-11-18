import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'

function ServicesPage() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <header className="pt-36 pb-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Usługi</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Kompleksowa obsługa digital: od strony WWW po działania marketingowe i wsparcie techniczne.</p>
        </div>
      </header>
      <Services />
      <Footer />
    </div>
  )
}

export default ServicesPage
