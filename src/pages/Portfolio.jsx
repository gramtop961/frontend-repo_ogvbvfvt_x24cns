import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Orange – kampania wizerunkowa', tag: 'Korporacja', color: 'from-slate-200 to-white' },
  { title: 'Mecalux – portal B2B', tag: 'Przemysł', color: 'from-slate-100 to-white' },
  { title: 'Nurofen – landing produktowy', tag: 'Farmacja', color: 'from-slate-200 to-white' },
  { title: 'Mydlarnia u Franciszka – e‑commerce', tag: 'Retail', color: 'from-slate-100 to-white' },
  { title: 'Bolsius – strona marki', tag: 'FMCG', color: 'from-slate-200 to-white' },
  { title: 'Carrantuohill – strona zespołu', tag: 'Kultura', color: 'from-slate-100 to-white' },
]

function Portfolio() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <header className="pt-36 pb-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Wybrane realizacje, które łączą estetykę i mierzalne efekty.</p>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl bg-gradient-to-br ${p.color} p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition`}
            >
              <div className="text-xs uppercase tracking-wider text-slate-500">{p.tag}</div>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <div className="mt-6 h-32 rounded-xl bg-white/70 ring-1 ring-slate-200" />
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Portfolio
