import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import LogoHummingbird from './LogoHummingbird'

function Navbar() {
  const [open, setOpen] = React.useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-slate-900 bg-white/90' : 'text-white/90 hover:text-white'
        }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <LogoHummingbird className="w-7 h-7" />
            <span className="text-white font-semibold tracking-wide">Esprito</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Start')}
            {navItem('/uslugi', 'Usługi')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/o-nas', 'O nas')}
            {navItem('/kontakt', 'Kontakt')}
          </nav>
          <button className="md:hidden text-white/90" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navItem('/', 'Start')}
            {navItem('/uslugi', 'Usługi')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/o-nas', 'O nas')}
            {navItem('/kontakt', 'Kontakt')}
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
