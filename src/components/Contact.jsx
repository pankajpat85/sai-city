import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:saiicity2222@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contact}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', contact: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Need <span className="highlight">Help?</span></h2>
          <p>Connect with us to find out more about our projects</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3>Contact Information</h3>
              <div className="info-items">
                <motion.div 
                  className="info-item"
                  whileHover={{ x: 10 }}
                >
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h4>Sales Office Address</h4>
                    <p>Sai City, Ramchandra Nagar,</p>
                    <p>Nr. Sarvoday School,</p>
                    <p>Kalyan-shil Road, Nilje,</p>
                    <p>Dombivli (E) 421204</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="info-item"
                  whileHover={{ x: 10 }}
                >
                  <FaPhone className="info-icon" />
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 9892115908</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="info-item"
                  whileHover={{ x: 10 }}
                >
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h4>Mail Us</h4>
                    <p>saiicity2222@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-header">
              <h3>Get in touch</h3>
              <p>If you have any queries, please do not hesitate to send us a message</p>
            </div>
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email id"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaComment className="input-icon" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaComment className="input-icon textarea-icon" />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 215, 0, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane className="btn-icon" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="map-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30149.278643088397!2d73.077773!3d19.166362000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf2cb97eacad%3A0xc0c80775f1686f15!2sSai%20City!5e0!3m2!1sen!2sin!4v1766734574921!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SAI City Nilje Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
