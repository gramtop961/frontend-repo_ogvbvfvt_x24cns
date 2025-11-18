import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  'Orange', 'Mecalux', 'Nurofen', 'IT Kontrakt', 'Mydlarnia u Franciszka', 'Bolsius', 'Carrantuohill', 'Karol Okrasa', 'Robert Sowa', 'Józef Skrzek', 'Bogdan Wołkowski'
]

function ClientsMarquee() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-wider text-slate-500">Zaufali nam</p>
        <div className="relative mt-6 overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos, ...logos].map((name, i) => (
              <div key={i} className="text-slate-700/70 text-lg font-medium">
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ClientsMarquee
