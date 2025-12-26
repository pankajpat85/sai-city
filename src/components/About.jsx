import { motion } from 'framer-motion'
import { FaCheck, FaBullseye, FaEye, FaBuilding } from 'react-icons/fa'
import './About.css'

const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Families' },
    { number: '50+', label: 'Acres of Land' },
    { number: '15+', label: 'Years Experience' },
    { number: '95%', label: 'Customer Satisfaction' }
  ]

  const highlights = [
    'RERA Approved Project',
    'Bank Loan Facility Available',
    'Clear Title & Legal Documents',
    'Vastu Compliant Designs',
    'Premium Quality Construction',
    'Timely Project Delivery'
  ]

  const leaders = [
    {
      name: 'Santosh Dixit',
      image: '/assets/images/santosh-dixit.png',
      bio: 'Santosh Dixit brings 15 years of experience in the real estate industry. With a passion for innovative design and sustainable development, he leads the team in creating exceptional living spaces that cater to modern needs.'
    },
    {
      name: 'Virendra Singh',
      image: '/assets/images/virendra-singh.png',
      bio: 'Virendra Singh brings 15 years of experience in the real estate industry. With a passion for innovative design and sustainable development, he leads the team in creating exceptional living spaces that cater to modern needs.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>About <span className="highlight">SAI City Nilje</span></h2>
            <p className="about-description">
              Sai City Nilje is a premier residential community designed to offer a blend of luxury, comfort, and convenience. Located in the heart of Nilje, our development features thoughtfully crafted homes and exceptional amenities that cater to a modern lifestyle. Discover a vibrant community where every detail is curated for your well-being and enjoyment.
            </p>
            <p className="about-description">
              Sai City Nilje is dedicated to providing exceptional residential experiences with a focus on quality, comfort, and modern living. Our mission is to create homes that not only meet but exceed the expectations of our residents.
            </p>

            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <FaCheck className="check-icon" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-placeholder">
              <motion.div
                className="floating-badge"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <h3>15+</h3>
                <p>Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Company Overview Section */}
        <motion.div
          className="company-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-icon">
            <FaBuilding />
          </div>
          <h3>Company Overview</h3>
          <p>
            Sai City Nilje is committed to creating high-quality residential communities that enhance the lifestyle of our residents. Our focus is on delivering excellence through innovative design, modern amenities, and exceptional customer service.
          </p>
          <p>
            Sai City Nilje is a premier real estate development firm committed to crafting luxurious and innovative living spaces. Our projects are designed with a vision to blend elegance with functionality, ensuring that every resident enjoys the highest standards of living.
          </p>
        </motion.div>

        {/* Vision and Mission Section */}
        <div className="vision-mission-grid">
          <motion.div
            className="vision-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-icon">
              <FaEye />
            </div>
            <h3>Vision</h3>
            <p>
              Our vision is to redefine urban living by developing communities that harmonize luxury, sustainability, and functionality. We aim to create spaces where residents can thrive in comfort and style.
            </p>
            <p>
              Our vision is to set new benchmarks in residential development by delivering projects that harmonize with the evolving needs of modern families. We strive to enhance the quality of life for our residents through thoughtful design and superior construction.
            </p>
          </motion.div>

          <motion.div
            className="mission-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-icon">
              <FaBullseye />
            </div>
            <h3>Mission</h3>
            <p>
              Our mission is to provide superior residential experiences through meticulous planning, high-quality construction, and dedicated service. We strive to exceed expectations and deliver lasting value to our community.
            </p>
            <p>
              Our mission is to build sustainable, aesthetically pleasing homes that offer both comfort and convenience. We are dedicated to creating communities where residents can thrive and enjoy a fulfilling lifestyle.
            </p>
          </motion.div>
        </div>

        {/* Leadership Section */}
        <motion.div
          className="leadership-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="leadership-heading">Leadership</h3>
          <p className="leadership-subtitle">Our leadership team comprises experienced professionals who bring a wealth of knowledge and expertise to every project.</p>
          
          <div className="leaders-grid">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                className="leader-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(255, 215, 0, 0.2)" }}
              >
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
                  }} />
                </div>
                <div className="leader-info">
                  <h4>{leader.name}</h4>
                  <p>{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

export default About
