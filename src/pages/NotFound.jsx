import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-slate-900">404</h1>
        <p className="mt-2 text-slate-600">Nie znaleziono strony</p>
        <a href="/" className="mt-6 inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white">Wróć do strony głównej</a>
      </div>
    </div>
  )
}
