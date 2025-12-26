import { motion } from 'framer-motion'
import { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    { id: 1, category: 'Exterior', title: 'Modern Facade' },
    { id: 2, category: 'Interior', title: 'Living Room' },
    { id: 3, category: 'Amenities', title: 'Swimming Pool' },
    { id: 4, category: 'Exterior', title: 'Garden View' },
    { id: 5, category: 'Interior', title: 'Master Bedroom' },
    { id: 6, category: 'Amenities', title: 'Gym & Fitness' },
    { id: 7, category: 'Exterior', title: 'Night View' },
    { id: 8, category: 'Interior', title: 'Kitchen' }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Project <span className="highlight">Gallery</span></h2>
          <p>Take a visual tour of our stunning properties and amenities</p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-image">
                <div className="image-placeholder">
                  <span>{item.title}</span>
                </div>
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
              <h3>{selectedImage.title}</h3>
              <div className="lightbox-image-placeholder">
                <span>{selectedImage.title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Gallery
