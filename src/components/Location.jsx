import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaSchool, FaShoppingBag, FaTrain, FaPlane, FaSubway, FaBus, FaStore } from 'react-icons/fa'
import './Location.css'
import React, { useEffect, useMemo, useRef, useState } from 'react'

const Location = () => {
  const gridRef = useRef(null)
  const [gridSize, setGridSize] = useState(800)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const nextSize = Math.max(1, rect.width)
      setGridSize(nextSize)
    }

    update()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', update)
      return () => window.removeEventListener('resize', update)
    }

    const ro = new ResizeObserver(() => update())
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const locations = [
    { 
      icon: <FaSchool />, 
      name: 'Lodha World School', 
      distance: '1 KM', 
      time: '5 mins',
      color: '#FF6B6B'
    },
    { 
      icon: <FaSchool />, 
      name: 'Pawar School', 
      distance: '3 KM', 
      time: '10 mins',
      color: '#4ECDC4'
    },
    { 
      icon: <FaShoppingBag />, 
      name: 'Xperial Mall', 
      distance: '1 KM', 
      time: '5 mins',
      color: '#95E1D3'
    },
    { 
      icon: <FaStore />, 
      name: 'Dmart', 
      distance: '3 KM', 
      time: '10 mins',
      color: '#F38181'
    },
    { 
      icon: <FaBus />, 
      name: 'Bus Stop', 
      distance: '0.5 KM', 
      time: '2-3 mins',
      color: '#AA96DA'
    },
    { 
      icon: <FaTrain />, 
      name: 'Nilje Railway Station', 
      distance: '3 KM', 
      time: '10 mins',
      color: '#FCBAD3'
    },
    { 
      icon: <FaTrain />, 
      name: 'Dombivli Railway Station', 
      distance: '6 KM', 
      time: '15 mins',
      color: '#FFFFD2'
    },
    { 
      icon: <FaPlane />, 
      name: 'Navi Mumbai International Airport', 
      distance: '20 KM', 
      time: '35 mins',
      color: '#A8D8EA'
    },
    { 
      icon: <FaSubway />, 
      name: 'New Proposed Metro Station', 
      distance: '1 KM', 
      time: '5 mins',
      color: '#FFAAA5'
    },
    { 
      icon: <FaMapMarkerAlt />, 
      name: 'Airoli', 
      distance: '15 KM', 
      time: '25 mins',
      color: '#FFD3B6'
    }
  ]

  const layout = useMemo(() => {
    const size = gridSize
    const center = size / 2
    const cardHalf = 110
    const padding = 28
    const maxRadius = Math.max(0, center - cardHalf - padding)
    const radius = Math.max(160, Math.min(maxRadius, size * 0.38))

    return {
      size,
      center,
      radius
    }
  }, [gridSize])

  return (
    <section id="location" className="location">
      <div className="location-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Prime <span className="highlight">Location</span></h2>
          <p>Strategically located with easy access to all major destinations</p>
        </motion.div>

        <div className="locations-wrapper">
          <div className="locations-grid" ref={gridRef}>
            <svg
              className="location-connectors"
              viewBox={`0 0 ${layout.size} ${layout.size}`}
              preserveAspectRatio="xMidYMid meet"
            >
              {locations.map((location, index) => {
                const angle = (index * 360) / locations.length
                const x = Math.cos((angle * Math.PI) / 180) * layout.radius
                const y = Math.sin((angle * Math.PI) / 180) * layout.radius

                return (
                  <motion.line
                    key={index}
                    x1={layout.center}
                    y1={layout.center}
                    x2={layout.center + x}
                    y2={layout.center + y}
                    stroke={location.color}
                    strokeWidth="2"
                    strokeDasharray="5,8"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  />
                )
              })}
            </svg>

            <div className="central-marker">
              <motion.div
                className="central-marker-inner"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="marker-pulse"></div>
                <div className="marker-core">
                  <FaMapMarkerAlt />
                  <span>SAI City Nilje</span>
                </div>
              </motion.div>
            </div>

            {locations.map((location, index) => {
              const angle = (index * 360) / locations.length
              const x = Math.cos((angle * Math.PI) / 180) * layout.radius
              const y = Math.sin((angle * Math.PI) / 180) * layout.radius

              return (
                <motion.div
                  key={index}
                  className="location-card"
                  transformTemplate={(_, generatedTransform) =>
                    `translate(-50%, -50%) ${generatedTransform}`
                  }
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  whileInView={{ opacity: 1, scale: 1, x, y }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.15,
                    zIndex: 100
                  }}
                >
                  <div className="location-icon" style={{ backgroundColor: location.color }}>
                    {location.icon}
                  </div>
                  <div className="location-details">
                    <h4>{location.name}</h4>
                    <div className="location-info">
                      <span className="distance">{location.distance}</span>
                      <span className="separator">•</span>
                      <span className="time">{location.time}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="location-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <p>All locations are easily accessible from SAI City Nilje</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Location
