# Quick Strapi Setup - Step by Step

Strapi is running on **http://localhost:1337**. Follow these steps:

## ✅ Step 1: Access Admin Panel

Open your browser and go to: **http://localhost:1337/admin**

## ✅ Step 2: Create Admin Account (if needed)

If you see a registration form, create your admin account.

## ✅ Step 3: Enable Internationalization

1. Click **Settings** (⚙️ gear icon in left sidebar)
2. Under "GLOBAL SETTINGS", click **Internationalization**
3. Click **Add new locale**
4. Add these locales one by one:
   - **Arabic** (ar)
   - **French** (fr)
   - English (en) should already be there
5. Click **Save**

## ✅ Step 4: Create Content Types

### A) Service Content Type

1. Click **Content-Type Builder** in left sidebar
2. Click **Create new collection type**
3. **Display name**: Service (singular: service)
4. Click **Continue**
5. Add these fields by clicking **Add another field**:

| Field Name | Type | Settings |
|------------|------|----------|
| `title` | Text (Short text) | ✅ Enable localization |
| `description` | Text (Long text) | ✅ Enable localization |
| `icon` | Enumeration | Values: `Code2,Workflow,Palette,MapPin,TrendingUp,Sparkles` |
| `gradient` | Text (Short text) | Default: `from-blue-500 to-cyan-500` |
| `imageUrl` | Text (Short text) | ✅ Required |
| `order` | Number (integer) | Default: `0` |

6. Click **Save** (top right) - Strapi will restart

### B) Portfolio Item Content Type

1. Click **Create new collection type**
2. **Display name**: Portfolio Item
3. Add fields:

| Field Name | Type | Settings |
|------------|------|----------|
| `title` | Text (Short text) | ✅ Enable localization |
| `description` | Text (Long text) | ✅ Enable localization |
| `category` | Text (Short text) | ✅ Enable localization |
| `imageUrl` | Text (Short text) | - |
| `gradient` | Text (Short text) | Default: `from-blue-500 to-cyan-500` |
| `order` | Number (integer) | Default: `0` |
| `featured` | Boolean | Default: `true` |

4. Click **Save**

### C) Hero Slide Content Type

1. Click **Create new collection type**
2. **Display name**: Hero Slide
3. Add fields:

| Field Name | Type | Settings |
|------------|------|----------|
| `title` | Text (Short text) | ✅ Enable localization |
| `subtitle` | Text (Short text) | ✅ Enable localization |
| `description` | Text (Long text) | ✅ Enable localization |
| `cta` | Text (Short text) | ✅ Enable localization |
| `link` | Text (Short text) | ✅ Required |
| `icon` | Enumeration | Values: `Code2,Workflow,Palette,MapPin,TrendingUp,Sparkles` |
| `gradient` | Text (Short text) | Default: `from-blue-500 to-cyan-500` |
| `imageUrl` | Text (Short text) | - |
| `order` | Number (integer) | Default: `0` |
| `active` | Boolean | Default: `true` |

4. Click **Save**

## ✅ Step 5: Set API Permissions

1. Click **Settings** in left sidebar
2. Under "USERS & PERMISSIONS PLUGIN", click **Roles**
3. Click on **Public** role
4. Scroll down to **Permissions** section
5. For each content type, check these permissions:
   - **Service**: ✅ find, ✅ findOne
   - **Portfolio-item**: ✅ find, ✅ findOne
   - **Hero-slide**: ✅ find, ✅ findOne
6. Click **Save**

## ✅ Step 6: Add Content

Use the data from `STRAPI_CONTENT_DATA.md` file:

### Add 6 Services:
1. Click **Content Manager** > **Service**
2. Click **Create new entry**
3. Fill in English content  first
4. Click **Save**
5. Click the language dropdown (top right) and select **Arabic**
6. Fill in Arabic content
7. Click **Save**
8. Repeat for **French**
9. Click **Publish**
10. Repeat for all 6 services

### Add 4 Portfolio Items:
Same process as Services

### Add 5 Hero Slides:
Same process as Services

## 🎉 Done!

Once you've added all content, let me know and I'll update the Next.js components!

Test your APIs at:
- http://localhost:1337/api/services
- http://localhost:1337/api/portfolio-items
- http://localhost:1337/api/hero-slides
