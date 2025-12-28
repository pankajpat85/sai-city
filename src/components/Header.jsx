import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1])

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      style={{ opacity: headerOpacity }}
    >
      <motion.div 
        className="header-glow"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.08, rotateY: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h1
            animate={{
              textShadow: [
                '0 0 10px rgba(255, 215, 0, 0.5)',
                '0 0 20px rgba(255, 215, 0, 0.8)',
                '0 0 10px rgba(255, 215, 0, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SAI City Nilje
          </motion.h1>
          <p className="tagline">Your Dream Living Space</p>
        </motion.div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, type: "spring" }}
              whileHover={{ 
                scale: 1.15, 
                color: '#FFD700',
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(false)}
            >
              <motion.span
                whileHover={{
                  textShadow: '0 0 8px rgba(255, 215, 0, 0.8)'
                }}
              >
                {item}
              </motion.span>
            </motion.a>
          ))}
        </nav>

        <motion.button 
          className="cta-button"
          whileHover={{ 
            scale: 1.08, 
            boxShadow: "0 8px 25px rgba(255, 215, 0, 0.5)",
            y: -2
          }}
          whileTap={{ scale: 0.95, y: 0 }}
          animate={{
            boxShadow: [
              '0 4px 15px rgba(255, 215, 0, 0.3)',
              '0 6px 20px rgba(255, 215, 0, 0.5)',
              '0 4px 15px rgba(255, 215, 0, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Book Now →
          </motion.span>
        </motion.button>

        <motion.div 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
