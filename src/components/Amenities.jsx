import { motion } from 'framer-motion'
import { FaDumbbell, FaSwimmingPool, FaTree, FaChild, FaWifi, FaRunning, FaTheaterMasks, FaSpa, FaHotel, FaPrayingHands } from 'react-icons/fa'
import { useState } from 'react'
import './Amenities.css'

const Amenities = () => {
  const [flipped, setFlipped] = useState({})

  const amenities = [
    { 
      icon: <FaPrayingHands />, 
      title: 'Grand Beautiful Temple', 
      description: 'Temple of Lord Jagannath',
      detail: 'A serene spiritual space for prayer and meditation, fostering peace and tranquility.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
      color: '#FF6B6B'
    },
    { 
      icon: <FaTheaterMasks />, 
      title: 'Mini Theatre', 
      description: 'Entertainment for all',
      detail: 'State-of-the-art projection and sound system for movie nights and events.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
      color: '#4ECDC4'
    },
    { 
      icon: <FaChild />, 
      title: 'Children Play Area', 
      description: 'Safe and fun playground',
      detail: 'Supervised play zone with modern equipment to keep kids active and engaged.',
      image: 'https://images.unsplash.com/photo-1742131636496-b2015a579725?w=800&q=80',
      color: '#FFE66D'
    },
    { 
      icon: <FaRunning />, 
      title: 'Jogging Track', 
      description: 'Stay fit and healthy',
      detail: 'Well-maintained running track surrounded by lush greenery for your daily fitness.',
      image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80',
      color: '#95E1D3'
    },
    { 
      icon: <FaSwimmingPool />, 
      title: 'Swimming Pool & Kids Pool', 
      description: 'Separate pools for all ages',
      detail: 'Olympic-sized pool with dedicated kids area and professional lifeguards.',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
      color: '#36C9C6'
    },
    { 
      icon: <FaDumbbell />, 
      title: 'Gymnasium', 
      description: 'Fully equipped modern gym',
      detail: 'Premium equipment and personal trainers to help achieve your fitness goals.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      color: '#FF8B94'
    },
    { 
      icon: <FaSpa />, 
      title: 'Yoga Centre & Spa', 
      description: 'Relax and rejuvenate',
      detail: 'Professional yoga instructors and spa treatments for complete wellness.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      color: '#B983FF'
    },
    { 
      icon: <FaWifi />, 
      title: 'Wi-Fi Connectivity', 
      description: 'High-speed internet in Club House',
      detail: 'Seamless connectivity throughout the community areas.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      color: '#FFA07A'
    },
    { 
      icon: <FaTree />, 
      title: 'Landscaped Garden', 
      description: 'Beautiful green spaces',
      detail: 'Meticulously designed gardens with walking paths and sitting areas.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      color: '#79D70F'
    },
    { 
      icon: <FaHotel />, 
      title: 'Guest Rooms', 
      description: 'Comfortable stay for visitors',
      detail: 'Fully furnished guest accommodations for your visiting friends and family.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      color: '#FFB6C1'
    }
  ]

  const toggleFlip = (index) => {
    setFlipped(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section id="amenities" className="amenities">
      <div className="amenities-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <motion.div
            className="section-badge"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            ⭐ Premium Amenities
          </motion.div>
          <h2>World-Class <span className="highlight">Amenities</span></h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Everything you need for a comfortable and luxurious lifestyle
          </motion.p>
        </motion.div>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="amenity-card-wrapper"
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.08,
                type: "spring",
                bounce: 0.4
              }}
            >
              <motion.div
                className="amenity-card"
                onClick={() => toggleFlip(index)}
                animate={{ rotateY: flipped[index] ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -10 }}
                style={{ 
                  transformStyle: "preserve-3d",
                  cursor: "pointer"
                }}
              >
                {/* Front Side */}
                <div className="card-face card-front" style={{ backfaceVisibility: "hidden" }}>
                  <motion.div 
                    className="amenity-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={amenity.image} alt={amenity.title} loading="lazy" />
                    <motion.div 
                      className="amenity-overlay"
                      whileHover={{ opacity: 0.7 }}
                    />
                  </motion.div>
                  <div className="amenity-content">
                    <motion.div
                      className="amenity-icon"
                      style={{ background: amenity.color }}
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                    >
                      {amenity.icon}
                    </motion.div>
                    <h3>{amenity.title}</h3>
                    <p>{amenity.description}</p>
                    <motion.div 
                      className="flip-indicator"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Click to flip →
                    </motion.div>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="card-face card-back" 
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: `linear-gradient(135deg, ${amenity.color}15, ${amenity.color}30)`
                  }}
                >
                  <motion.div
                    className="back-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: flipped[index] ? 1 : 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="back-icon"
                      style={{ background: amenity.color }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {amenity.icon}
                    </motion.div>
                    <h3>{amenity.title}</h3>
                    <p className="detail-text">{amenity.detail}</p>
                    <motion.div 
                      className="flip-back-indicator"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ← Click to flip back
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  className="card-glow"
                  style={{ background: `radial-gradient(circle, ${amenity.color}30, transparent 70%)` }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities
