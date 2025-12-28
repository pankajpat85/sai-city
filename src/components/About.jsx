import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FaCheck, FaBullseye, FaEye, FaBuilding } from 'react-icons/fa'
import { useRef, useState, useEffect } from 'react'
import './About.css'

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [end, duration, isInView])

  return <span ref={ref}>{count}</span>
}

const About = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const stats = [
    { number: 500, suffix: '+', label: 'Happy Families' },
    { number: 50, suffix: '+', label: 'Acres of Land' },
    { number: 15, suffix: '+', label: 'Years Experience' },
    { number: 95, suffix: '%', label: 'Customer Satisfaction' }
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
      image: 'assets/images/santosh-dixit.png',
      bio: 'Santosh Dixit brings 15 years of experience in the real estate industry. With a passion for innovative design and sustainable development, he leads the team in creating exceptional living spaces that cater to modern needs.'
    },
    {
      name: 'Virendra Singh',
      image: 'assets/images/virendra-singh.png',
      bio: 'Virendra Singh brings 15 years of experience in the real estate industry. With a passion for innovative design and sustainable development, he leads the team in creating exceptional living spaces that cater to modern needs.'
    }
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div 
        className="about-bg-shapes"
        style={{ y }}
      >
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </motion.div>

      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.div
              className="section-tag"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              🏢 About Us
            </motion.div>
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
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <motion.div
                    className="check-icon-wrapper"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaCheck className="check-icon" />
                  </motion.div>
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.div 
              className="image-placeholder"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="floating-badge"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <CountUp end={15} />+
                </motion.h3>
                <p>Years of Excellence</p>
              </motion.div>

              <motion.div
                className="pulse-ring"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Company Overview Section */}
        <motion.div
          className="company-section"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          whileHover={{ scale: 1.02, rotateY: 2 }}
        >
          <motion.div 
            className="section-icon"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <FaBuilding />
          </motion.div>
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
            initial={{ opacity: 0, x: -80, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
          >
            <motion.div 
              className="card-icon"
              whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaEye />
            </motion.div>
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
            initial={{ opacity: 0, x: 80, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{ scale: 1.03, y: -10, rotateY: -5 }}
          >
            <motion.div 
              className="card-icon"
              whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaBullseye />
            </motion.div>
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
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", bounce: 0.4 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  boxShadow: "0 25px 60px rgba(255, 215, 0, 0.3)" 
                }}
              >
                <motion.div 
                  className="leader-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img 
                    src={leader.image} 
                    alt={leader.name}
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div
                    className="image-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
                <div className="leader-info">
                  <h4>{leader.name}</h4>
                  <p>{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
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
              initial={{ opacity: 0, scale: 0, rotateY: 180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", bounce: 0.6 }}
              whileHover={{ scale: 1.15, rotate: 5, y: -10 }}
            >
              <motion.div
                className="stat-icon-bg"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              />
              <h3>
                <CountUp end={stat.number} duration={2} />{stat.suffix}
              </h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
