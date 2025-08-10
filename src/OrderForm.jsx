import React, { useState } from 'react'
import { sendOrderEmail } from './emailService'
import './OrderForm.css'

const OrderForm = ({ card, onClose }) => {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: 1,
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomerData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateTotal = () => {
    const price = parseInt(card.price.replace('₹', ''))
    return price * customerData.quantity
  }

  const handleManualEmail = () => {
    const orderDetails = `
NEW WEDDING INVITATION ORDER

CUSTOMER DETAILS:
Name: ${customerData.name}
Email: ${customerData.email}
Phone: ${customerData.phone}
Address: ${customerData.address}

ORDER DETAILS:
Card: ${card.title}
Category: ${card.category}
Description: ${card.description}
Price per piece: ${card.price}
Quantity: ${customerData.quantity}
Total Amount: ₹${calculateTotal()}
Order Date: ${new Date().toLocaleDateString()}

SPECIAL REQUESTS:
${customerData.specialRequests || 'None'}
    `.trim()

    const subject = encodeURIComponent(`New Wedding Invitation Order - ${card.title}`)
    const body = encodeURIComponent(orderDetails)
    const mailtoLink = `mailto:yugipixels@gmail.com?subject=${subject}&body=${body}`
    
    window.open(mailtoLink, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Prepare order data
    const orderData = {
      customerName: customerData.name,
      customerEmail: customerData.email,
      customerPhone: customerData.phone,
      customerAddress: customerData.address,
      cardTitle: card.title,
      cardCategory: card.category,
      cardPrice: card.price,
      quantity: customerData.quantity,
      totalAmount: `₹${calculateTotal()}`,
      specialRequests: customerData.specialRequests,
      orderDate: new Date().toLocaleDateString()
    }

    try {
      // Try to send email directly
      const emailSent = await sendOrderEmail(orderData)
      
      if (emailSent) {
        setSubmitMessage('✅ Order submitted successfully! We will contact you within 24 hours.')
        
        // Reset form after successful submission
        setTimeout(() => {
          onClose()
        }, 3000)
        return
      }
      
      throw new Error('Email service unavailable')
      
    } catch (error) {
      console.error('Direct email failed:', error)
      
      // Reliable fallback - mailto link
      const orderMessage = `
🎉 NEW WEDDING INVITATION ORDER 🎉

👤 CUSTOMER INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${customerData.name}
Email: ${customerData.email}
Phone: ${customerData.phone}
Address: ${customerData.address}

🎨 ORDER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Card Design: ${card.title}
Category: ${card.category}
Description: ${card.description}
Unit Price: ${card.price}
Quantity Ordered: ${customerData.quantity} pieces
💰 TOTAL AMOUNT: ₹${calculateTotal()}
📅 Order Date: ${new Date().toLocaleDateString()}

✨ SPECIAL REQUESTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${customerData.specialRequests || 'No special requests'}

⏰ ACTION REQUIRED: Please contact this customer within 24 hours to confirm the order and discuss payment options.

📱 Order submitted via Yugi Pixels website on ${new Date().toLocaleString()}
      `.trim()
      
      const subject = encodeURIComponent(`🎉 New Order: ${card.title} - ${customerData.name}`)
      const body = encodeURIComponent(orderMessage)
      const mailtoLink = `mailto:yugipixels@gmail.com?subject=${subject}&body=${body}`
      
      // Open customer's email client
      window.open(mailtoLink, '_blank')
      
      setSubmitMessage('📧 Order details opened in your email app. Please send the email to complete your order!')
      
      setTimeout(() => {
        onClose()
      }, 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="order-overlay">
      <div className="order-form">
        <div className="order-header">
          <h2>Order Details</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <div className="selected-card">
          <img src={card.image} alt={card.title} />
          <div className="card-info">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <span className="price">{card.price} each</span>
            <span className="category">{card.category}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h4>Customer Information</h4>
            
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={customerData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={customerData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={customerData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Delivery Address *</label>
              <textarea
                name="address"
                value={customerData.address}
                onChange={handleInputChange}
                required
                placeholder="Enter your complete delivery address"
                rows="3"
              />
            </div>
          </div>

          <div className="form-section">
            <h4>Order Details</h4>
            
            <div className="form-group">
              <label>Quantity</label>
              <select
                name="quantity"
                value={customerData.quantity}
                onChange={handleInputChange}
              >
                {[...Array(50)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? 'piece' : 'pieces'}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Special Requests (Optional)</label>
              <textarea
                name="specialRequests"
                value={customerData.specialRequests}
                onChange={handleInputChange}
                placeholder="Any special customizations or requests"
                rows="3"
              />
            </div>
          </div>

          <div className="order-summary">
            <div className="summary-row">
              <span>Unit Price:</span>
              <span>{card.price}</span>
            </div>
            <div className="summary-row">
              <span>Quantity:</span>
              <span>{customerData.quantity}</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount:</span>
              <span>₹{calculateTotal()}</span>
            </div>
          </div>

          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
              {submitMessage}
            </div>
          )}

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button 
              type="button" 
              onClick={handleManualEmail} 
              className="email-btn"
              disabled={!customerData.name || !customerData.email || !customerData.phone}
            >
              Send via Email
            </button>
            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? 'Submitting...' : 'Submit Order'}
            </button>
          </div>
        </form>

        <div className="contact-note">
          <p><strong>Note:</strong> This is an order inquiry. We will contact you within 24 hours to confirm details and payment method.</p>
          <p><strong>Alternative:</strong> You can also email us directly at <a href="mailto:yugipixels@gmail.com">yugipixels@gmail.com</a> or call us for immediate assistance.</p>
        </div>
      </div>
    </div>
  )
}

export default OrderForm
