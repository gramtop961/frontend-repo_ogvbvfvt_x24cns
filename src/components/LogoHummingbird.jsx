import React from 'react'

function LogoHummingbird({ className = 'w-8 h-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Esprito Hummingbird"
    >
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      <path
        d="M28 120c28-6 58-26 80-48 8-8 18-16 32-16 16 0 30 10 38 18 14 14 24 22 42 28-10 2-26 2-46-4l-24 24c8 6 22 16 36 24 12 6 18 14 18 22 0 10-8 18-20 18-10 0-20-6-28-14-8-8-14-18-18-26l-24 24c-10 10-22 16-36 16-18 0-32-10-36-30-2-8 0-16 2-24z"
        fill="url(#grad)"
      />
      <circle cx="190" cy="76" r="6" fill="#1f2937" />
    </svg>
  )
}

export default LogoHummingbird
