import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <header className="pt-36 pb-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Kontakt</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Porozmawiajmy o Twoim projekcie. Wypełnij formularz, a my wrócimy z propozycją.</p>
        </div>
      </header>
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <form className="bg-white rounded-2xl p-8 ring-1 ring-slate-200 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Imię i nazwisko</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" placeholder="Jan Kowalski" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">E‑mail</label>
                <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" placeholder="jan@firma.pl" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Temat</label>
              <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" placeholder="Nowa strona www" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Wiadomość</label>
              <textarea className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" rows="5" placeholder="Opisz krótko swój projekt..." />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 transition">Wyślij</button>
          </form>
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">Dane kontaktowe</h3>
            <p className="mt-2 text-slate-600">kontakt@esprito.pl<br/>+48 123 456 789</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
