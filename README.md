# 🎉 Yugi Pixels - Wedding Invitation Website

A beautiful, modern React.js website for Yugi Pixels wedding invitation business with admin panel and direct email order system.

![Yugi Pixels](https://img.shields.io/badge/Business-Wedding%20Invitations-ff6b95)
![React](https://img.shields.io/badge/React-18.0+-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![Email](https://img.shields.io/badge/Email-Integrated-green)

## ✨ Features

### 🎨 **Beautiful Website**
- Modern responsive design with peach & brown color scheme
- Professional wedding card gallery with pricing
- Smooth scrolling navigation
- Mobile-friendly layout

### 🔐 **Admin Panel**
- Secure login system (`admin` / `yugipixels2025`)
- Add, edit, and remove wedding invitations
- Real-time website updates
- User-friendly management interface

### 📧 **Order Management**
- Customer order form with detailed information collection
- Direct email notifications to `yugipixels@gmail.com`
- Professional email templates
- Multiple delivery methods for reliability

### 💼 **Business Ready**
- Contact information integration
- Professional presentation
- SEO-friendly structure
- Fast loading performance

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/[YOUR_USERNAME]/yugi-pixels-website.git
cd yugi-pixels-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5174/
```

## 📁 Project Structure

```
yugi-pixels-website/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Main styles
│   ├── AdminPanel.jsx       # Admin management panel
│   ├── AdminPanel.css       # Admin panel styles
│   ├── OrderForm.jsx        # Customer order form
│   ├── OrderForm.css        # Order form styles
│   ├── emailService.js      # Email sending service
│   ├── emailConfig.js       # Email configuration
│   ├── index.css            # Global styles
│   └── main.jsx            # Application entry point
├── public/
├── SETUP.md                # Email setup instructions
├── GITHUB_DEPLOY.md        # GitHub deployment guide
└── README.md               # This file
```

## 🔧 Configuration

### Email Setup
1. See `SETUP.md` for detailed email configuration instructions
2. Update `src/emailConfig.js` with your email service credentials
3. Test the order form to ensure emails are delivered

### Admin Access
- **URL:** Click "Admin" in navigation
- **Username:** `admin`
- **Password:** `yugipixels2025`

## 🎯 Usage

### For Customers
1. Browse wedding card gallery
2. Click "Order Now" on desired card
3. Fill out order form
4. Submit order (email sent automatically)

### For Admin/Owner
1. Access admin panel via navigation
2. Login with credentials
3. Manage wedding card inventory
4. Monitor orders via email notifications

## 📧 Email Integration

The website uses multiple email services for reliability:
- **Primary:** FormSubmit.co (free, no setup required)
- **Fallback:** Customer's default email client
- **Destination:** All orders go to `yugipixels@gmail.com`

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🚀 Deployment

### GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (main)
4. Website will be available at: `https://[username].github.io/yugi-pixels-website`

### Other Platforms
- **Netlify:** Connect GitHub repo for automatic deployments
- **Vercel:** Import project from GitHub
- **Traditional Hosting:** Upload `dist/` folder after running `npm run build`

## 🎨 Customization

### Colors
- Edit CSS custom properties in `src/index.css`
- Current theme: Rich peach background with brown text

### Content
- Wedding cards: Edit data in `src/App.jsx`
- Contact info: Update in `src/App.jsx`
- Business details: Modify in various components

### Functionality
- Add new features in respective component files
- Extend admin panel capabilities
- Integrate additional payment methods

## 📞 Support

For technical support or questions:
- **Email:** nithishkarthik25@gmail.com
- **Business:** yugipixels@gmail.com

## 📄 License

This project is created for Yugi Pixels wedding invitation business.

## 🏆 Acknowledgments

- Built with React.js and Vite
- Email integration via FormSubmit.co
- Images from Unsplash
- Icons and fonts from Google Fonts

---

**Made with ❤️ for Yugi Pixels Wedding Invitations**

*Transform your special moments into beautiful memories* ✨
