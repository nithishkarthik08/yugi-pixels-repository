// EmailJS Configuration
// Follow these steps to set up email functionality:

/*
STEP 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

STEP 2: Create Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account
5. Note down the Service ID (e.g., 'service_yugipixels')

STEP 3: Create Email Template
1. Go to Email Templates in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

Subject: New Wedding Invitation Order - {{card_title}}

Dear Yugi Pixels Team,

You have received a new order inquiry:

CUSTOMER DETAILS:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}
- Address: {{customer_address}}

ORDER DETAILS:
- Card: {{card_title}}
- Category: {{card_category}}
- Description: {{card_description}}
- Price per piece: {{card_price}}
- Quantity: {{quantity}}
- Total Amount: {{total_amount}}
- Order Date: {{order_date}}

SPECIAL REQUESTS:
{{special_requests}}

Please contact the customer within 24 hours to confirm the order and discuss payment options.

Best regards,
Yugi Pixels Order System

4. Save the template and note down the Template ID (e.g., 'template_order')

STEP 4: Get Public Key
1. Go to Account > API Keys in your EmailJS dashboard
2. Copy your Public Key

STEP 5: Update Configuration
Update the constants in OrderForm.jsx with your actual values:
- SERVICE_ID: Your service ID from step 2
- TEMPLATE_ID: Your template ID from step 3
- PUBLIC_KEY: Your public key from step 4
*/

// EmailJS Configuration
// For testing purposes, using a demo configuration
// Follow the setup guide to get your own credentials

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_yugipixels',
  TEMPLATE_ID: 'template_yugipixels',
  PUBLIC_KEY: 'KVaJO9J8KTgM9GQJJ', // Demo public key
  TO_EMAIL: 'yugipixels@gmail.com'
}
