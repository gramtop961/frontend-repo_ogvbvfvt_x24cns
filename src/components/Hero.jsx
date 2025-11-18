import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur">
            Studio stron internetowych
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Esprito — projektujemy i rozwijamy nowoczesne strony
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Nasza praca została doceniona w kraju i za granicą. Pracujemy dla dużych marek i lokalnego biznesu — zawsze z efektem wzrostu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 transition">
              Umów rozmowę
            </a>
            <a href="/portfolio" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-slate-50 transition">
              Zobacz realizacje
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60" />
    </section>
  )
}

export default Hero
