import { useEffect, useState } from 'react'
import { navLinks } from '../data/data'
import { MenuIcon, X } from 'lucide-react'

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)

useEffect(()=>{
  const handleScroll = ()=>{
    setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return ()=> window.removeEventListener("scroll", handleScroll)
},[])
  return (
    <>
      <nav
  className={`fixed top-0 left-0 z-10 px-auto w-full bg-white shadow-sm duration-300
    ${scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'}`}
>
        <div className="flex items-center justify-between font-medium py-4 px-6 mx-auto max-w-7xl">

          {/* Logo */}
          <a href="/">
            <img src="/assets/logo.svg" alt="logo" className="w-32" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-orange-500 transition"
              >
                {link.name}
              </a>
            ))}

          </div>

          {/* Booking Button */}
          <a
            href="#booking-process"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
          >
            Book a table
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-zinc-800 text-white p-2 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X /> : <MenuIcon />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg py-6">

            <div className="flex flex-col items-center space-y-6 font-medium">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl text-zinc-800 hover:text-orange-500 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#booking-process"
                onClick={() => setIsOpen(false)}
                className="bg-orange-500 text-white px-6 py-3 rounded-full"
              >
                Book a table
              </a>

            </div>

          </div>
        )}

      </nav>
    </>
  )
}

export default Navbar