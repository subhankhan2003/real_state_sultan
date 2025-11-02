# Vercel Deployment Guide

## Step-by-Step Instructions to Deploy on Vercel

### Prerequisites
✅ Your project is already on GitHub (without node_modules)
✅ You have a Vercel account (create one at https://vercel.com if you don't)

---

## Step 1: Connect GitHub to Vercel

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in (or create an account if needed)
   - Click **"Add New"** → **"Project"**

2. **Import Your GitHub Repository**
   - You'll see a list of your GitHub repositories
   - Find your project repository
   - Click **"Import"** next to your project

---

## Step 2: Configure Project Settings

When the import screen appears, configure these settings:

### Framework Preset
- **Framework Preset**: Select **"Vite"** (or "Other" if Vite is not listed)
- Vercel should auto-detect it, but if not, choose "Other"

### Root Directory
- Leave it as **"."** (current directory) unless your project is in a subfolder

### Build and Output Settings
These should auto-populate, but verify:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install` (or leave default)

### Node.js Version
- Leave as default (usually Node.js 18.x or 20.x)

---

## Step 3: Deploy

1. **Click "Deploy"**
   - Vercel will start building your project
   - This may take 1-3 minutes

2. **Wait for Build to Complete**
   - You'll see build logs in real-time
   - If there are any errors, they'll be shown here

3. **Get Your Live URL**
   - Once deployment is successful, you'll get a URL like: `your-project-name.vercel.app`
   - Your site is now live! 🎉

---

## Step 4: Automatic Deployments (Future)

✅ **Automatic Deployments are Enabled by Default:**
- Every push to `main`/`master` branch → Deploys to production
- Every pull request → Creates a preview deployment
- You don't need to do anything - it's automatic!

---

## Troubleshooting

### If Build Fails:

1. **Check Build Logs**
   - Look for error messages in the Vercel dashboard
   - Common issues:
     - Missing environment variables
     - TypeScript errors
     - Dependency issues

2. **Check Node Version**
   - Vercel usually uses Node 18.x or 20.x
   - If you need a specific version, add `.nvmrc` file to your project

### If Routing Doesn't Work:

- The `vercel.json` file is already created with proper rewrites
- If you still have issues, verify the `vercel.json` file exists in your repo

---

## Additional Settings (Optional)

### Custom Domain
- After deployment, go to **Project Settings** → **Domains**
- Add your custom domain if you have one

### Analytics
- Enable Vercel Analytics in **Project Settings** → **Analytics** (optional)

---

## Summary of Settings to Select:

✅ **Framework**: Vite (or Other)
✅ **Build Command**: `npm run build`
✅ **Output Directory**: `dist`
✅ **Install Command**: `npm install` (default)
✅ **Root Directory**: `.` (default)
✅ **Node.js Version**: 18.x or 20.x (default)

---

**Need Help?** Check Vercel's documentation: https://vercel.com/docs

