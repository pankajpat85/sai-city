import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>SAI City Nilje</h3>
            <p>Building dreams, Creating homes, Shaping futures.</p>
            <div className="social-links">
              <motion.a whileHover={{ scale: 1.2, color: '#FFD700' }} href="#"><FaFacebook /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: '#FFD700' }} href="#"><FaTwitter /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: '#FFD700' }} href="#"><FaInstagram /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: '#FFD700' }} href="#"><FaLinkedin /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: '#FFD700' }} href="#"><FaYoutube /></motion.a>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#amenities">Amenities</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Contact Info</h4>
            <div className="contact-details">
              <p><FaMapMarkerAlt /> Sai City, Ramchandra Nagar, Nr. Sarvoday School, Kalyan-shil Road, Nilje, Dombivli (E) 421204</p>
              <p><FaPhone /> +91 9892115908</p>
              <p><FaEnvelope /> saiicity2222@gmail.com</p>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 SAI City Nilje. All rights reserved.</p>
          <p>Designed with ❤️ by SAI City Nilje Team</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
