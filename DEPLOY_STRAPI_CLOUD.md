# Deploy Strapi to Strapi Cloud (Free Tier)

## Step 1: Create Strapi Cloud Account

1. Go to: **https://cloud.strapi.io/signup**
2. Sign up with GitHub (recommended) or email
3. Verify your email if needed

## Step 2: Create New Project

1. Click **"Create project"** or **"New project"**
2. Choose **"Deploy from GitHub"**
3. Connect your GitHub account if not already connected
4. Select repository: **`azkila140/porto`**
5. **Root directory**: Enter `strapi-cms` (important!)

## Step 3: Configure Project

### Base Configuration
- **Project name**: `nexus-logic-cms` (or your choice)
- **Region**: Choose closest to you (Europe, US, etc.)
- **Plan**: Select **Free** tier

### Environment Variables

Add these environment variables:

```bash
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=dd2hhzhkq
CLOUDINARY_API_KEY=336617392348436
CLOUDINARY_API_SECRET=vgKvqDD9C5611S5hjWZFf3LWmGY

# Node Environment
NODE_ENV=production
```

**Note:** Database, app keys, and JWT secrets are auto-configured by Strapi Cloud!

## Step 4: Deploy

1. Click **"Deploy project"**
2. Wait 3-5 minutes for build and deployment
3. ✅ Your Strapi will be live!

## Step 5: Access Your Strapi Admin

1. Once deployed, you'll get a URL like: `https://your-project-name.strapiapp.com`
2. Click **"Open admin"** or visit the URL
3. **Create your admin account** (first time only)
4. Log in to Strapi admin panel

## Step 6: Configure Content Types

Since this is a fresh deployment, you need to recreate the content types:

### Option A: Use AI Prompt (Fastest)
In Strapi Cloud admin:
1. Go to Content-Type Builder
2. Use the AI prompts from before (Service, Portfolio Item, Hero Slide)

### Option B: Manual Creation
Follow the [STRAPI_QUICK_SETUP.md](file:///c:/Users/donsk/Downloads/nexus%20logic/STRAPI_QUICK_SETUP.md) guide

## Step 7: Set API Permissions

1. Settings → Roles → Public
2. Enable `find` and `findOne` for:
   - Service
   - Portfolio-item
   - Hero-slide
3. Save

## Step 8: Generate API Token

1. Settings → API Tokens → Create new API Token
2. **Name**: "Production Token"
3. **Token duration**: Unlimited
4. **Token type**: Full access
5. Click **Save**
6. **⚠️ Copy the token immediately!** You won't see it again

## Step 9: Populate Content

Two options:

### Option A: Run Upload Script (Recommended)
Update the script with your production URL and token, then run it.

### Option B: Manual Entry
Use the data from [STRAPI_CONTENT_DATA.md](file:///c:/Users/donsk/Downloads/nexus%20logic/STRAPI_CONTENT_DATA.md)

## Step 10: Update Vercel Environment Variables

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add/Update:
   ```
   NEXT_PUBLIC_STRAPI_URL=https://your-project-name.strapiapp.com
   STRAPI_API_TOKEN=your_production_api_token
   ```
3. **Redeploy** your Vercel project

## ✅ Verification

Test your Strapi API:
- `https://your-project-name.strapiapp.com/api/services?locale=en`
- `https://your-project-name.strapiapp.com/api/portfolio-items?locale=ar`
- `https://your-project-name.strapiapp.com/api/hero-slides?locale=fr`

Should return JSON data!

## 🎉 Complete Setup

Once done, you'll have:
- ✅ Strapi CMS on Strapi Cloud (free)
- ✅ Next.js on Vercel
- ✅ Images on Cloudinary
- ✅ Database on Supabase
- ✅ All services connected!

## Free Tier Limits

Strapi Cloud Free includes:
- ✅ 1 project
- ✅ 1GB storage
- ✅ Unlimited API requests
- ✅ PostgreSQL database included
- ✅ SSL certificate included

Perfect for production! 🚀

## Troubleshooting

### Build Failed
- Check the build logs in Strapi Cloud
- Ensure `strapi-cms` is set as root directory
- Verify all dependencies are in package.json

### Content Types Missing
- They won't transfer automatically from local
- Need to recreate them in production
- Or export/import schema (advanced)

### Can't Access Admin
- URL should be: `https://your-project.strapiapp.com/admin`
- Create admin account on first visit
- Check email for verification if required

## Need Help?

Start here: https://cloud.strapi.io/docs
