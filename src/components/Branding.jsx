import React from 'react'
import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'

function Branding() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Wizerunek firmy i marki</h2>
            <p className="mt-3 text-slate-600">Branding i identyfikacja wizualna dopasowana do strategii i charakteru marki. Subtelna paleta: odcienie bieli, szarości i granatu — z akcentami koloru tam, gdzie potrzebne.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex gap-2"><span>•</span> Księga znaku i system identyfikacji</li>
              <li className="flex gap-2"><span>•</span> Projektowanie logo i materiałów firmowych</li>
              <li className="flex gap-2"><span>•</span> Guidelines UI dla produktów cyfrowych</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 ring-1 ring-slate-200"
          >
            <div className="grid grid-cols-6 gap-3">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-white ring-1 ring-slate-200" />
              ))}
            </div>
            <div className="absolute -top-5 -right-5 bg-slate-900 text-white rounded-full p-3 shadow-lg">
              <Palette className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Branding
