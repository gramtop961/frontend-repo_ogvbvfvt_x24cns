import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <header className="pt-36 pb-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">O nas</h1>
          <p className="mt-2 text-slate-600 max-w-3xl">Pracujemy dla dużych firm i lokalnego biznesu. Każdy Klient otrzymuje wyjątkowe rozwiązania, które prowadzą do wzrostu skali biznesu.</p>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="prose prose-slate max-w-none">
            <p>Nasza praca została doceniona w kraju i za granicą. Potwierdzają to znane marki oraz wybitne osobowości, z którymi współpracowaliśmy.</p>
            <ul>
              <li>Orange, Mecalux, Nurofen, IT Kontrakt</li>
              <li>Mydlarnia u Franciszka, Bolsius, Carrantuohill</li>
              <li>Karol Okrasa, Robert Sowa, Józef Skrzek</li>
              <li>Bogdan Wołkowski – 14‑krotny mistrz świata w trikach bilardowych</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 ring-1 ring-slate-200">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl bg-white ring-1 ring-slate-200" />)
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
