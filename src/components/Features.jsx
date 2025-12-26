import { motion } from 'framer-motion'
import { FaHome, FaTree, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: <FaHome />,
      title: 'Modern Architecture',
      description: 'Contemporary designs that blend aesthetics with functionality for a perfect living experience.'
    },
    {
      icon: <FaTree />,
      title: 'Green Spaces',
      description: 'Lush landscaped gardens and parks for a healthy, eco-friendly lifestyle.'
    },
    {
      icon: <FaShieldAlt />,
      title: '24/7 Security',
      description: 'Advanced security systems with CCTV surveillance and trained personnel.'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Prime Location',
      description: 'Strategic location with easy access to schools, hospitals, and shopping centers.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="features" className="features">
      <div className="features-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose <span className="highlight">SAI City Nilje</span></h2>
          <p>Experience the perfect combination of comfort, luxury, and convenience</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 40px rgba(255, 215, 0, 0.2)",
                y: -10
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="icon-wrapper"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
