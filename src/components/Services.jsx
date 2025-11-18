import React from 'react'
import { motion } from 'framer-motion'
import { Code2, ShoppingCart, Rocket, Share2, Globe, Wrench } from 'lucide-react'

const services = [
  { icon: Code2, title: 'Tworzenie stron internetowych', desc: 'Projekt i wdrożenie szybkich, responsywnych i dostępnych witryn.' },
  { icon: ShoppingCart, title: 'Sklepy internetowe', desc: 'Nowoczesne e‑commerce z UX nastawionym na konwersję.' },
  { icon: Rocket, title: 'E‑marketing (SEO/SEM)', desc: 'Strategie, które realnie zwiększają ruch i sprzedaż.' },
  { icon: Share2, title: 'Media społecznościowe', desc: 'Komunikacja, która buduje zaangażowanie i markę.' },
  { icon: Globe, title: 'Domeny, hosting, SSL', desc: 'Pełna opieka techniczna i bezpieczeństwo.' },
  { icon: Wrench, title: 'Bieżąca obsługa', desc: 'Stały rozwój i wsparcie stron i sklepów.' },
]

function Services({ compact = false }) {
  return (
    <section className={`${compact ? 'py-12' : 'py-20'} bg-slate-50`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Usługi internetowe</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Dostarczamy kompleksowo — od kreacji, przez development, po skuteczny marketing i techniczne wsparcie.</p>
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition"
            >
              <s.icon className="w-6 h-6 text-slate-700" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
