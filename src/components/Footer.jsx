import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm">© {new Date().getFullYear()} Esprito. Wszystkie prawa zastrzeżone.</p>
        <div className="text-sm">Odcienie bieli • szarości • granatu</div>
      </div>
    </footer>
  )
}

export default Footer
