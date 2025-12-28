import { motion, useScroll, useTransform } from 'framer-motion'
import { FaPlay, FaStar, FaBuilding, FaUsers } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const floatingAnimation2 = {
    y: [0, -15, 0],
    x: [0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const stats = [
    { icon: <FaBuilding />, number: '500+', label: 'Happy Families' },
    { icon: <FaStar />, number: '50+', label: 'Acres of Land' },
    { icon: <FaUsers />, number: '95%', label: 'Satisfaction' }
  ]

  return (
    <section id="home" className="hero">
      <motion.div className="hero-overlay" style={{ opacity }} />
      
      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div 
        className="hero-content"
        style={{ y: y1 }}
      >
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          style={{ x: mousePosition.x * 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="hero-badge"
          >
            <motion.span
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(255, 215, 0, 0.5)',
                  '0 0 40px rgba(255, 215, 0, 0.8)',
                  '0 0 20px rgba(255, 215, 0, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🏆 Award Winning Project
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            Welcome to <span className="highlight">SAI City Nilje</span>
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #FFD700, #FFA500, #FFD700)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Experience Modern Living in the Heart of Innovation
            </motion.span>
          </motion.p>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover a perfect blend of contemporary design, sustainable living, and world-class amenities. 
            Your dream home awaits in our thoughtfully planned community.
          </motion.p>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="stat-icon"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {stat.icon}
                </motion.div>
                <div className="stat-content">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 40px rgba(255, 215, 0, 0.6)",
                y: -3
              }}
              whileTap={{ scale: 0.95, y: 0 }}
              animate={{
                boxShadow: [
                  '0 5px 20px rgba(255, 215, 0, 0.3)',
                  '0 8px 30px rgba(255, 215, 0, 0.5)',
                  '0 5px 20px rgba(255, 215, 0, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Explore Homes →
              </motion.span>
            </motion.button>
            
            <motion.button 
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#FFA500",
                backgroundColor: "rgba(255, 215, 0, 0.1)",
                y: -3
              }}
              whileTap={{ scale: 0.95, y: 0 }}
            >
              <motion.span
                className="play-icon-wrapper"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaPlay className="play-icon" />
              </motion.span>
              Watch Video
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 100, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ 
            y: y2,
            x: mousePosition.x * -0.5 
          }}
        >
          <motion.div 
            className="floating-card"
            animate={floatingAnimation}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 30px 80px rgba(255, 215, 0, 0.3)"
            }}
          >
            <motion.div 
              className="card-glow"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="card-content">
              <motion.h3
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
              >
                Premium Living
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
              >
                Starting from ₹45 Lakhs
              </motion.p>
            </div>
          </motion.div>

          {/* Floating icons */}
          <motion.div
            className="floating-icon floating-icon-1"
            animate={floatingAnimation2}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              🏡
            </motion.div>
          </motion.div>
          <motion.div
            className="floating-icon floating-icon-2"
            animate={{
              y: [0, -25, 0],
              x: [0, -10, 0],
              rotate: [0, 10, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -360 }}
              transition={{ duration: 0.5 }}
            >
              🌳
            </motion.div>
          </motion.div>
          <motion.div
            className="floating-icon floating-icon-3"
            animate={{
              y: [0, -18, 0],
              rotate: [0, -15, 0],
              transition: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              ⭐
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        style={{ opacity }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
