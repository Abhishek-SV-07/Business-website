# GitHub Pages Deployment Guide

## Steps to Deploy Sri Automation Website to GitHub Pages

### 1. Repository Setup
- Your code is already in the `Business-website` repository
- Make sure all changes are committed and pushed to the `main` branch

### 2. Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/Business-website`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 3. Automatic Deployment
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
  - Build your Next.js project
  - Export it as static files
  - Deploy to GitHub Pages
- This happens automatically when you push to the `main` branch

### 4. Access Your Website
After deployment (usually takes 2-5 minutes), your website will be available at:
`https://YOUR_USERNAME.github.io/Business-website/`

### 5. Custom Domain (Optional)
If you want to use a custom domain like `www.sriautomation.com`:
1. In repository Settings > Pages
2. Add your custom domain in the **Custom domain** field
3. Create a CNAME record in your domain's DNS settings pointing to `YOUR_USERNAME.github.io`

### 6. SSL Certificate
GitHub Pages automatically provides SSL certificates for both github.io domains and custom domains.

## Troubleshooting
- If deployment fails, check the **Actions** tab in your repository for error logs
- Make sure all file paths use forward slashes (/)
- Images and assets should be in the `public/` folder
