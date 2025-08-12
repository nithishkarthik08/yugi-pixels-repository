import React, { useState, useEffect } from 'react'
import './App.css'
import AdminPanel from './AdminPanel'
import OrderForm from './OrderForm'

function App() {
  const [showAdmin, setShowAdmin] = useState(false)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [weddingCards, setWeddingCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/cards')
      .then(res => res.json())
      .then(data => setWeddingCards(data))
      .catch(() => setWeddingCards([]))
  }, [])

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleOrderClick = (card) => {
    setSelectedCard(card)
    setShowOrderForm(true)
  }

  const handleCloseOrderForm = () => {
    setShowOrderForm(false)
    setSelectedCard(null)
  }

  const handleAddCard = (newCard) => {
    setWeddingCards([...weddingCards, newCard])
  }

  const handleRemoveCard = (cardId) => {
    if (window.confirm('Are you sure you want to remove this invitation?')) {
      setWeddingCards(weddingCards.filter(card => card.id !== cardId))
    }
  }

  const handleUpdateCard = (cardId, updatedCard) => {
    setWeddingCards(weddingCards.map(card => 
      card.id === cardId ? { ...updatedCard, id: cardId } : card
    ))
  }

  if (showAdmin) {
    return (
      <AdminPanel 
        cards={weddingCards}
        onAddCard={handleAddCard}
        onRemoveCard={handleRemoveCard}
        onUpdateCard={handleUpdateCard}
        onBackToWebsite={() => setShowAdmin(false)}
      />
    )
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h2>Yugi Pixels</h2>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button 
                onClick={() => setShowAdmin(true)} 
                className="admin-access-btn"
                title="Admin Access"
              >
                Admin
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ background: '#FFDBCC' }}>
        <div className="hero-content">
          <h1>Beautiful Wedding Invitations</h1>
          <p>Create unforgettable first impressions with our stunning collection of wedding invitations</p>
          <button className="cta-button" onClick={scrollToGallery}>View Collection</button>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Our Wedding Card Collection</h2>
          <p className="section-subtitle">Choose from our carefully curated selection of elegant wedding invitations</p>
          <div className="cards-grid">
            {weddingCards.map(card => (
              <div key={card.id} className="card">
                <div className="card-image">
                  <img src={card.image.startsWith('/uploads/') ? `http://localhost:5000${card.image}` : card.image} alt={card.title} />
                  <div className="card-overlay">
                    <span className="category">{card.category}</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="card-footer">
                    <span className="price">{card.price}</span>
                    <button 
                      className="order-btn"
                      onClick={() => handleOrderClick(card)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Yugi Pixels</h2>
              <p>We specialize in creating beautiful, memorable wedding invitations that perfectly capture the essence of your special day. With over 5 years of experience in the industry, we combine traditional craftsmanship with modern design to deliver invitations that your guests will treasure.</p>
              <ul>
                <li>✓ Premium quality materials</li>
                <li>✓ Custom design options</li>
                <li>✓ Fast delivery</li>
                <li>✓ Affordable pricing</li>
              </ul>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&h=400&fit=crop" alt="Wedding preparation" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Ready to create your perfect wedding invitation? Contact us today!</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>6369149990</p>
            </div>
            <div className="contact-item">
              <h3>✉️ Email</h3>
              <p>yugipixels@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>📍 Address</h3>
              <p>Palani, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Yugi Pixels. All rights reserved.</p>
        </div>
      </footer>

      {/* Order Form Modal */}
      {showOrderForm && selectedCard && (
        <OrderForm 
          card={selectedCard}
          onClose={handleCloseOrderForm}
        />
      )}
    </div>
  )
}

export default App
