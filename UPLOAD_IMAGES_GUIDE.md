# Upload AI-Generated Images to Strapi/Cloudinary

## Quick Start

### Option 1: Upload All Images Automatically (Recommended)

Run this script to upload all images to Cloudinary:

```bash
node upload-images-to-cloudinary.js
```

**What it does:**
- ✅ Uploads all 15 images to Cloudinary
- ✅ Organizes them into folders (services, portfolio, hero)
- ✅ Generates optimized URLs
- ✅ Creates a summary JSON file
- ✅ All images accessible in Strapi Media Library

**After running:**
- Images are on Cloudinary CDN
- Accessible in Strapi Media Library
- Can be used in content by URL

---

## Option 2: Manual Upload to Strapi

1. **Go to Strapi Admin**: http://localhost:1337/admin
2. **Click Media Library**
3. **Click "+ Add new assets"**
4. **Upload images** (they automatically go to Cloudinary!)

---

## Adding Custom AI-Generated Images

### If you generate new images with AI:

1. **Save the image URL or download it**

2. **Add to the upload script:**
   Open `upload-images-to-cloudinary.js` and add:
   ```javascript
   { 
     url: 'your-image-url-here', 
     name: 'descriptive-name', 
     folder: 'nexus-logic/category' 
   }
   ```

3. **Run the script:**
   ```bash
   node upload-images-to-cloudinary.js
   ```

### Or upload manually in Strapi:
- Media Library → Upload → Select file
- Or drag and drop!

---

## Image Organization in Cloudinary

Images are organized by category:

```
nexus-logic/
├── services/
│   ├── service-digital-engineering
│   ├── service-automation
│   ├── service-branding
│   └── ...
├── portfolio/
│   ├── portfolio-medical-platform
│   ├── portfolio-real-estate
│   └── ...
└── hero/
    ├── hero-digital-engineering
    ├── hero-automation
    └── ...
```

---

## Using Uploaded Images in Strapi

### Method 1: Via Media Library Field
1. In Content-Type Builder, add a **Media** field
2. When creating content, select from Media Library
3. Choose your uploaded image

### Method 2: Via URL Field
1. Run the upload script to get Cloudinary URLs
2. Copy the URL from the summary
3. Paste into the `imageUrl` field in Strapi

---

## Benefits

✅ **CDN Delivery** - Fast loading worldwide  
✅ **Auto Optimization** - WebP, AVIF, quality optimization  
✅ **Organized** - Folder structure keeps images tidy  
✅ **Backup** - Images stored on Cloudinary (not just local)  
✅ **Transformations** - Resize, crop, effects on-the-fly  
✅ **Strapi Integration** - Seamlessly available in Media Library

---

## Viewing Your Images

**In Cloudinary Dashboard:**
https://console.cloudinary.com → Media Library

**In Strapi:**
http://localhost:1337/admin → Media Library

---

## Summary

Run this command to upload all images now:

```bash
node upload-images-to-cloudinary.js
```

Then all your AI-generated images will be stored in Cloudinary and accessible in Strapi! 🎉
