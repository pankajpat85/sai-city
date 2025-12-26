import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Features', 'Location', 'Amenities', 'Contact']

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1>SAI City Nilje</h1>
          <p className="tagline">Your Dream Living Space</p>
        </motion.div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: '#FFD700' }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 20px rgba(255, 215, 0, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.header>
  )
}

export default Header
