# 🚀 Deployment Setup Guide - Nexus Logic Platform

## ✅ Step 1: Configure Supabase Database

### 1.1 Run the Database Schema
1. Open your Supabase dashboard: https://supabase.com/dashboard/project/pxhjxilpswhisbdhpifr/sql
2. Click **"New Query"**
3. Copy the entire contents of `setup-supabase.sql` from your project
4. Paste into the SQL Editor
5. Click **"Run"** or press `Ctrl+Enter`
6. You should see: ✅ Success messages

### 1.2 Create Test User
1. Go to: https://supabase.com/dashboard/project/pxhjxilpswhisbdhpifr/auth/users
2. Click **"Add User"** (green button top right)
3. Choose **"Create new user"**
4. Fill in:
   - **Email**: `demo@nexuslogic.com`
   - **Password**: `Demo123456!`
   - **Auto Confirm User**: ✅ Check this box
5. Click **"Create User"**
6. **Copy the User ID** from the users table (you'll need it for sample data)

### 1.3 Add Sample Data (Optional)
1. Copy the user ID from step 1.2
2. Go back to SQL Editor
3. Replace `USER_ID_HERE` in the sample data section with your actual user ID
4. Run the INSERT statements to add sample projects and invoices

---

## ✅ Step 2: Configure Vercel Environment Variables

### 2.1 Access Vercel Project Settings
1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project: **porto**
3. Click **Settings** (top navigation)
4. Click **Environment Variables** (left sidebar)

### 2.2 Add Environment Variables
Click **"Add New"** and add these one by one:

#### Variable 1:
- **Key**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://pxhjxilpswhisbdhpifr.supabase.co`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

#### Variable 2:
- **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4aGp4aWxwc3doaXNiZGhwaWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4MzI0NDksImV4cCI6MjA4NTQwODQ0OX0.dfGLo5Qni2E7ezaHONDM8GzV9Agp30H1oawsZKqwou8`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

#### Variable 3 (Optional - for lead automation):
- **Key**: `N8N_WEBHOOK_URL`
- **Value**: `your-n8n-webhook-url` (if you have one)
- **Environment**: ✅ Production
- Click **Save**

#### Variable 4 (Required for Email Notifications):
- **Key**: `RESEND_API_KEY`
- **Value**: `re_123456...` (Your actual Resend API Key)
- **Environment**: ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

### 2.3 Redeploy
1. Go to **Deployments** tab
2. Click the **⋮** (three dots) on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete (~2 minutes)

---

## ✅ Step 3: Test Your Deployment

### 3.1 Test Marketing Site
Visit your Vercel URL and check:
- ✅ Homepage loads with hero section
- ✅ Services page works
- ✅ Work/portfolio page loads
- ✅ Contact page displays
- ✅ Homepage loads with hero section
- ✅ Services page works
- ✅ Work/portfolio page loads
- ✅ Contact page displays
- ✅ Language switcher works (AR/FR/EN)
- ✅ **SEO Metadata:** Check page title and description change with language.

### 3.2 Test Client Portal
1. Go to `/ar/login` on your deployed site
2. Login with:
   - **Email**: `demo@nexuslogic.com`
   - **Password**: `Demo123456!`
3. You should be redirected to `/ar/dashboard`
4. Check all portal pages:
   - ✅ Dashboard home
   - ✅ Projects page
   - ✅ Invoices page
   - ✅ Support page

### 3.3 Test Lead Form
1. Go to homepage
2. Scroll to lead capture form
3. Fill out and submit
4. Check Supabase → Table Editor → `leads` table
5. You should see your submission

---

## 🎉 You're Done!

Your Nexus Logic platform is now fully deployed with:
- ✅ Marketing site (Home, Services, Work, Contact, Solutions)
- ✅ Client Portal (Login, Dashboard, Projects, Invoices, Support)
- ✅ Lead capture system
- ✅ Trilingual support (Arabic RTL, French, English)
- ✅ Secure authentication with Supabase
- ✅ Row Level Security (RLS) policies

---

## 📝 Quick Reference

### Local Development
```bash
npm run dev
# Visit: http://localhost:3000
```

### Test Credentials
- **Email**: demo@nexuslogic.com
- **Password**: Demo123456!

### Important URLs
- **Supabase Dashboard**: https://supabase.com/dashboard/project/pxhjxilpswhisbdhpifr
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/azkila140/porto

### Environment Variables (Already Configured)
- ✅ `.env.local` - Local development
- ✅ Vercel - Production deployment

---

## 🔧 Troubleshooting

### Login not working?
- Check Supabase env vars are set in Vercel
- Verify user exists in Supabase Auth → Users
- Check browser console for errors

### Database errors?
- Verify `setup-supabase.sql` was run successfully
- Check RLS policies are enabled
- Ensure user ID matches in sample data

### Build failing?
- Check Vercel build logs
- Ensure all dependencies are installed
- Verify TypeScript has no errors

---

## 🚀 Next Steps

1. **Customize Content**: Update text, images, and branding
2. **Add Real Projects**: Replace sample data with actual client projects
3. **Email Notifications**: Set up email templates in Supabase
4. **Analytics**: Add Google Analytics or Vercel Analytics
5. **Custom Domain**: Connect your domain in Vercel settings
6. **Admin Panel**: Build admin interface for managing clients
7. **File Uploads**: Add file upload for support tickets
8. **Payment Integration**: Connect Stripe for invoice payments

Need help? Check the documentation in the project files!
