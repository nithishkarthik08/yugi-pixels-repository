# Yugi Pixels - Wedding Invitation Website

A beautiful React.js website for Yugi Pixels invitation business with admin panel and email order functionality.

## Features

### 🎨 **Main Website**
- Beautiful responsive design with peach and brown color scheme
- Wedding card gallery with pricing
- Smooth scrolling navigation
- Professional layout with hero section, gallery, about, and contact sections

### 🔐 **Admin Panel**
- Secure login system (Username: `admin`, Password: `yugipixels2025`)
- Add new wedding invitations
- Edit existing invitations
- Remove invitations
- Real-time updates to the website

### 📧 **Order Management**
- Customer order form with detailed information collection
- Email notifications sent directly to your Gmail
- Order details include customer info, card details, quantity, and total amount
- Professional email templates

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Email Setup (EmailJS)

#### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

#### Step 2: Create Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account
5. Note down the Service ID (e.g., `service_yugipixels`)

#### Step 3: Create Email Template
1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template:

**Template Name:** Order Notification

**Subject:** New Wedding Invitation Order - {{card_title}}

**Content:**
```
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
```

4. Save the template and note down the Template ID (e.g., `template_order`)

#### Step 4: Get Public Key
1. Go to "Account" > "API Keys" in your EmailJS dashboard
2. Copy your Public Key

#### Step 5: Update Configuration
Edit `src/emailConfig.js` and replace the placeholder values:

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',     // From Step 2
  TEMPLATE_ID: 'your_actual_template_id',   // From Step 3
  PUBLIC_KEY: 'your_actual_public_key',     // From Step 4
  TO_EMAIL: 'your-business@gmail.com'       // Your business email
}
```

### 3. Run the Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:5174/`

## Usage

### For Customers
1. Browse the wedding card gallery
2. Click "Order Now" on any card
3. Fill out the order form with contact details and requirements
4. Submit the order (you'll receive the details via email)

### For Admin (Owner)
1. Click "Admin" in the navigation
2. Login with:
   - Username: `admin`
   - Password: `yugipixels2025`
3. Add, edit, or remove wedding invitations
4. Changes appear immediately on the website

## Project Structure
```
src/
├── App.jsx              # Main application component
├── App.css              # Main styles
├── AdminPanel.jsx       # Admin panel component
├── AdminPanel.css       # Admin panel styles
├── OrderForm.jsx        # Customer order form
├── OrderForm.css        # Order form styles
├── emailConfig.js       # Email configuration
├── index.css            # Global styles
└── main.jsx            # Application entry point
```

## Technologies Used
- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **EmailJS** - Email sending service
- **CSS3** - Styling with modern layouts (Flexbox, Grid)
- **Google Fonts** - Typography (Inter font family)

## Color Scheme
- **Primary Background:** Rich Peach (`#FFDBCC`)
- **Secondary Background:** Light Peach (`#FFF0E6`)
- **Primary Text:** Rich Brown (`#6B4423`)
- **Secondary Text:** Medium Brown (`#8B4513`)
- **Accent:** Darker Brown (`#A0522D`)

## Support
For any issues or questions about the website setup, please contact the development team.

---
© 2025 Yugi Pixels. All rights reserved.
