import { motion, useScroll, useTransform } from 'framer-motion'
import { FaHome, FaTree, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { useRef } from 'react'
import './Features.css'

const Features = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: <FaHome />,
      title: 'Modern Architecture',
      description: 'Contemporary designs that blend aesthetics with functionality for a perfect living experience.',
      color: '#4F46E5',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: <FaTree />,
      title: 'Green Spaces',
      description: 'Lush landscaped gardens and parks for a healthy, eco-friendly lifestyle.',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    {
      icon: <FaShieldAlt />,
      title: '24/7 Security',
      description: 'Advanced security systems with CCTV surveillance and trained personnel.',
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Prime Location',
      description: 'Strategic location with easy access to schools, hospitals, and shopping centers.',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="features" className="features" ref={ref}>
      <motion.div 
        className="features-bg-decoration"
        style={{ y, opacity }}
      >
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>
        <div className="decoration-circle decoration-circle-3"></div>
      </motion.div>

      <div className="features-container">
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
            ✨ Premium Features
          </motion.div>
          <h2>
            Why Choose <span className="highlight">SAI City Nilje</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Experience the perfect combination of comfort, luxury, and convenience
          </motion.p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08, 
                y: -15,
                rotateY: 5,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="card-shine"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div 
                className="icon-wrapper"
                style={{ 
                  background: feature.gradient
                }}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="icon-background"
                />
                <span className="icon-content">{feature.icon}</span>
              </motion.div>

              <motion.div
                className="feature-number"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                0{index + 1}
              </motion.div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

              <motion.div 
                className="card-glow"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${feature.color}20, transparent 70%)`
                }}
              />

              <motion.div 
                className="hover-border"
                style={{ borderColor: feature.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="features-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 215, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Explore All Features →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
