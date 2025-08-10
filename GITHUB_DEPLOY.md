# GitHub Deployment Instructions

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in with your account (nithishkarthik25@gmail.com)

2. Click the "+" icon in the top right corner and select "New repository"

3. Set up your repository:
   - **Repository name**: `yugi-pixels-website`
   - **Description**: `Beautiful wedding invitation business website with admin panel and email order system`
   - **Visibility**: Choose Public or Private as preferred
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

4. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see a page with setup instructions. Use these commands in your terminal:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/[YOUR_USERNAME]/yugi-pixels-website.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

Replace `[YOUR_USERNAME]` with your actual GitHub username.

## Step 3: Alternative - Use GitHub CLI (if you have it installed)

If you have GitHub CLI installed, you can create and push in one go:

```bash
# Create repository and push (requires GitHub CLI)
gh repo create yugi-pixels-website --public --source=. --remote=origin --push
```

## Step 4: Verify Upload

1. Go to your GitHub repository page
2. You should see all your project files
3. The README.md should display the project information

## Current Repository Status

✅ Git repository initialized
✅ All files committed locally
✅ Ready to push to GitHub

## Project Files Included

- 📂 **src/** - Main application code
  - `App.jsx` - Main application component
  - `AdminPanel.jsx` - Admin panel for managing invitations
  - `OrderForm.jsx` - Customer order form
  - All CSS styling files
  - Email configuration files

- 📄 **Configuration Files**
  - `package.json` - Project dependencies
  - `vite.config.js` - Build configuration
  - `index.html` - Main HTML file

- 📋 **Documentation**
  - `README.md` - Project overview
  - `SETUP.md` - Email setup instructions
  - This deployment guide

## Need Help?

If you encounter any issues:

1. **Authentication Error**: You may need to set up a GitHub personal access token
2. **Permission Error**: Make sure you have write access to the repository
3. **Network Error**: Check your internet connection

## Next Steps After Upload

1. ✅ Repository created on GitHub
2. 🚀 Set up GitHub Pages for free hosting (optional)
3. 🔧 Configure email service for order notifications
4. 📱 Share your website with customers

Your Yugi Pixels website is ready to be deployed! 🎉
