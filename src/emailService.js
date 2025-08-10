// Simple email service using Formsubmit.co (completely free, no signup required)
export const sendOrderEmail = async (orderData) => {
  const formData = new FormData()
  
  // Formsubmit.co configuration
  formData.append('_to', 'yugipixels@gmail.com')
  formData.append('_subject', `New Wedding Invitation Order - ${orderData.cardTitle}`)
  formData.append('_template', 'table')
  formData.append('_captcha', 'false')
  
  // Order details
  formData.append('Customer Name', orderData.customerName)
  formData.append('Customer Email', orderData.customerEmail)
  formData.append('Customer Phone', orderData.customerPhone)
  formData.append('Customer Address', orderData.customerAddress)
  formData.append('Card Title', orderData.cardTitle)
  formData.append('Card Category', orderData.cardCategory)
  formData.append('Card Price', orderData.cardPrice)
  formData.append('Quantity', orderData.quantity)
  formData.append('Total Amount', orderData.totalAmount)
  formData.append('Special Requests', orderData.specialRequests || 'None')
  formData.append('Order Date', orderData.orderDate)
  
  try {
    const response = await fetch('https://formsubmit.co/yugipixels@gmail.com', {
      method: 'POST',
      body: formData
    })
    
    return response.ok
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}
