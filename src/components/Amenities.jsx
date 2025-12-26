import { motion } from 'framer-motion'
import { FaDumbbell, FaSwimmingPool, FaTree, FaChild, FaWifi, FaRunning, FaTheaterMasks, FaSpa, FaHotel, FaPrayingHands } from 'react-icons/fa'
import './Amenities.css'

const Amenities = () => {
  const amenities = [
    { 
      icon: <FaPrayingHands />, 
      title: 'Grand Beautiful Temple', 
      description: 'Temple of Lord Jagannath',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
    },
    { 
      icon: <FaTheaterMasks />, 
      title: 'Mini Theatre', 
      description: 'Entertainment for all',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80'
    },
    { 
      icon: <FaChild />, 
      title: 'Children Play Area', 
      description: 'Safe and fun playground',
      image: 'https://images.unsplash.com/photo-1742131636496-b2015a579725?w=800&q=80'
    },
    { 
      icon: <FaRunning />, 
      title: 'Jogging Track', 
      description: 'Stay fit and healthy',
      image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80'
    },
    { 
      icon: <FaSwimmingPool />, 
      title: 'Swimming Pool & Kids Pool', 
      description: 'Separate pools for all ages',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80'
    },
    { 
      icon: <FaDumbbell />, 
      title: 'Gymnasium', 
      description: 'Fully equipped modern gym',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'
    },
    { 
      icon: <FaSpa />, 
      title: 'Yoga Centre & Spa', 
      description: 'Relax and rejuvenate',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
    },
    { 
      icon: <FaWifi />, 
      title: 'Wi-Fi Connectivity', 
      description: 'High-speed internet in Club House',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    },
    { 
      icon: <FaTree />, 
      title: 'Landscaped Garden', 
      description: 'Beautiful green spaces',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80'
    },
    { 
      icon: <FaHotel />, 
      title: 'Guest Rooms', 
      description: 'Comfortable stay for visitors',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'
    }
  ]

  return (
    <section id="amenities" className="amenities">
      <div className="amenities-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>World-Class <span className="highlight">Amenities</span></h2>
          <p>Everything you need for a comfortable and luxurious lifestyle</p>
        </motion.div>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="amenity-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(255, 215, 0, 0.2)",
                y: -10
              }}
            >
              <div className="amenity-image">
                <img src={amenity.image} alt={amenity.title} loading="lazy" />
                <div className="amenity-overlay"></div>
              </div>
              <div className="amenity-content">
                <motion.div
                  className="amenity-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {amenity.icon}
                </motion.div>
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities
