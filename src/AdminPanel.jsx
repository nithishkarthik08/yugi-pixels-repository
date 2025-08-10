import React, { useState } from 'react'
import './AdminPanel.css'

const AdminPanel = ({ cards, onAddCard, onRemoveCard, onUpdateCard, onBackToWebsite }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingCard, setEditingCard] = useState(null)
  const [newCard, setNewCard] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: 'Standard'
  })

  // Admin credentials (in a real app, this would be more secure)
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'yugipixels2025'
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (loginData.username === ADMIN_CREDENTIALS.username && 
        loginData.password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true)
      setLoginData({ username: '', password: '' })
    } else {
      alert('Invalid credentials. Please try again.')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowAddForm(false)
    setEditingCard(null)
  }

  const handleAddCard = (e) => {
    e.preventDefault()
    if (newCard.title && newCard.description && newCard.price && newCard.image) {
      const cardToAdd = {
        ...newCard,
        id: Date.now(), // Simple ID generation
      }
      onAddCard(cardToAdd)
      setNewCard({
        title: '',
        description: '',
        price: '',
        image: '',
        category: 'Standard'
      })
      setShowAddForm(false)
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleEditCard = (card) => {
    setEditingCard(card.id)
    setNewCard({
      title: card.title,
      description: card.description,
      price: card.price,
      image: card.image,
      category: card.category
    })
  }

  const handleUpdateCard = (e) => {
    e.preventDefault()
    if (newCard.title && newCard.description && newCard.price && newCard.image) {
      onUpdateCard(editingCard, newCard)
      setEditingCard(null)
      setNewCard({
        title: '',
        description: '',
        price: '',
        image: '',
        category: 'Standard'
      })
    }
  }

  const cancelEdit = () => {
    setEditingCard(null)
    setShowAddForm(false)
    setNewCard({
      title: '',
      description: '',
      price: '',
      image: '',
      category: 'Standard'
    })
  }

  if (!isLoggedIn) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="login-hint">Hint: username: admin, password: yugipixels2025</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>Admin Panel - Manage Invitations</h2>
        <div className="header-actions">
          <button onClick={onBackToWebsite} className="back-btn">Back to Website</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="admin-actions">
        <button 
          onClick={() => setShowAddForm(true)} 
          className="add-btn"
          disabled={showAddForm || editingCard}
        >
          Add New Invitation
        </button>
      </div>

      {(showAddForm || editingCard) && (
        <div className="card-form">
          <h3>{editingCard ? 'Edit Invitation' : 'Add New Invitation'}</h3>
          <form onSubmit={editingCard ? handleUpdateCard : handleAddCard}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                value={newCard.title}
                onChange={(e) => setNewCard({...newCard, title: e.target.value})}
                placeholder="e.g., Royal Elegance"
                required
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={newCard.description}
                onChange={(e) => setNewCard({...newCard, description: e.target.value})}
                placeholder="Brief description of the invitation design"
                required
              />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input
                type="text"
                value={newCard.price}
                onChange={(e) => setNewCard({...newCard, price: e.target.value})}
                placeholder="e.g., ₹299"
                required
              />
            </div>
            <div className="form-group">
              <label>Image URL:</label>
              <input
                type="url"
                value={newCard.image}
                onChange={(e) => setNewCard({...newCard, image: e.target.value})}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            <div className="form-group">
              <label>Category:</label>
              <select
                value={newCard.category}
                onChange={(e) => setNewCard({...newCard, category: e.target.value})}
              >
                <option value="Budget">Budget</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">
                {editingCard ? 'Update' : 'Add'} Invitation
              </button>
              <button type="button" onClick={cancelEdit} className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="cards-management">
        <h3>Current Invitations ({cards.length})</h3>
        <div className="admin-cards-grid">
          {cards.map(card => (
            <div key={card.id} className="admin-card">
              <img src={card.image} alt={card.title} />
              <div className="admin-card-content">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
                <div className="card-details">
                  <span className="price">{card.price}</span>
                  <span className="category">{card.category}</span>
                </div>
                <div className="card-actions">
                  <button 
                    onClick={() => handleEditCard(card)} 
                    className="edit-btn"
                    disabled={editingCard || showAddForm}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => onRemoveCard(card.id)} 
                    className="remove-btn"
                    disabled={editingCard || showAddForm}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
