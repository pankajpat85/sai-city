import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      rating: 5,
      text: 'SAI City Nilje has exceeded all our expectations. The quality of construction and the amenities are simply outstanding. We are proud to call this place our home.'
    },
    {
      name: 'Priya Sharma',
      role: 'Resident',
      rating: 5,
      text: 'The location is perfect with easy access to schools and hospitals. The community here is wonderful, and the management is very responsive to our needs.'
    },
    {
      name: 'Amit Patel',
      role: 'Happy Resident',
      rating: 5,
      text: 'Best investment decision we ever made! The green spaces, modern amenities, and professional management make living here a truly premium experience.'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>What Our <span className="highlight">Residents Say</span></h2>
          <p>Hear from the families who made SAI City Nilje their home</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 50px rgba(255, 215, 0, 0.2)"
              }}
            >
              <FaQuoteLeft className="quote-icon" />
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
