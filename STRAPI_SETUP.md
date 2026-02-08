# Strapi CMS Setup Guide

## Step 1: Install and Start Strapi

```bash
cd "c:\Users\donsk\Downloads\nexus logic"

# Create Strapi project in a subdirectory
npx create-strapi-app@latest strapi-cms --quickstart

# This will:
# - Create a new Strapi project in ./strapi-cms
# - Install dependencies
# - Start the development server on http://localhost:1337
# - Open the admin registration page
```

## Step 2: Create Admin Account

1. Browser will open to `http://localhost:1337/admin`
2. Create your admin account:
   - First Name
   - Last Name
   - Email
   - Password

## Step 3: Enable i18n Plugin

1. Go to **Settings** (gear icon in sidebar)
2. Navigate to **Plugins** > **Internationalization**
3. Add locales:
   - Arabic (ar)
   - French (fr)
   - English (en) - this should be default
4. Save changes

## Step 4: Create Content Types

### Service Content Type

1. Go to **Content-Type Builder**
2. Click **Create new collection type**
3. Display name: `Service`
4. Click **Continue**
5. Add fields:

**title** (Text):
- Type: Short text
- Advanced settings → Enable localization

**description** (Text):
- Type: Long text
- Advanced settings → Enable localization

**icon** (Enumeration):
- Values: Code2, Workflow, Palette, MapPin, TrendingUp, Sparkles
- Default: Code2

**gradient** (Text):
- Type: Short text
- Default: from-blue-500 to-cyan-500

**imageUrl** (Text):
- Type: Short text
- Required: Yes

**order** (Number):
- Type: Integer
- Default: 0

6. Click **Save** and wait for server restart

### Portfolio Item Content Type

1. Click **Create new collection type**
2. Display name: `Portfolio Item`
3. Add fields:

**title** (Text):
- Type: Short text
- Enable localization

**description** (Text):
- Type: Long text
- Enable localization

**category** (Text):
- Type: Short text
- Enable localization

**image** (Media):
- Type: Single media
- Allowed types: Images only

**imageUrl** (Text):
- Type: Short text  
- Default: (empty)

**gradient** (Text):
- Type: Short text
- Default: from-blue-500 to-cyan-500

**order** (Number):
- Type: Integer
- Default: 0

**featured** (Boolean):
- Type: Boolean
- Default: true

4. Click **Save**

### Hero Slide Content Type

1. Click **Create new collection type**
2. Display name: `Hero Slide`
3. Add fields:

**title** (Text):
- Type: Short text
- Enable localization

**subtitle** (Text):
- Type: Short text
- Enable localization

**description** (Text):
- Type: Long text
- Enable localization

**cta** (Text):
- Type: Short text
- Enable localization

**link** (Text):
- Type: Short text
- Required: Yes

**icon** (Enumeration):
- Values: Code2, Workflow, Palette, MapPin, TrendingUp, Sparkles

**gradient** (Text):
- Type: Short text
- Default: from-blue-500 to-cyan-500

**imageUrl** (Text):
- Type: Short text

**order** (Number):
- Type: Integer
- Default: 0

**active** (Boolean):
- Type: Boolean
- Default: true

4. Click **Save**

## Step 5: Configure API Permissions

1. Go to **Settings** > **Users & Permissions Plugin** > **Roles**
2. Click on **Public** role
3. Scroll to **Permissions**
4. Enable the following for each content type:
   - Service: `find`, `findOne`
   - Portfolio-item: `find`, `findOne`
   - Hero-slide: `find`, `findOne`
5. Click **Save**

## Step 6: Populate Content

Now manually add your existing content through the Strapi admin:

### Services (6 items)

Go to **Content Manager** > **Services** > **Create new entry**

Add each service with translations for AR/FR/EN

### Portfolio Items (4 items)

Go to **Content Manager** > **Portfolio Items** > **Create new entry**

### Hero Slides (5 items)

Go to **Content Manager** > **Hero Slides** > **Create new entry**

## Step 7: Test API

Open browser to:
- `http://localhost:1337/api/services?locale=ar`
- `http://localhost:1337/api/portfolio-items?locale=fr`  
- `http://localhost:1337/api/hero-slides?locale=en`

You should see JSON responses with your content.

## Step 8: Update Next.js Environment

Add to your `.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## Done!

Your Strapi CMS is now ready. The Next.js app will fetch content from Strapi automatically.
