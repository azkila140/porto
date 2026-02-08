# Image Upload Guide for Strapi

## Current Image Situation

Your project currently uses **Unsplash URLs** for all images. Here's what you need to know:

### Option 1: Keep Using Unsplash URLs (Recommended for Now)
**Pros:**
- ✅ Already working
- ✅ No upload needed
- ✅ High-quality professional images
- ✅ Fast loading (served from Unsplash CDN)
- ✅ Free to use

**Cons:**
- ❌ Requires internet connection
- ❌ Dependent on external service

**What to do:** Nothing! Your current setup works perfectly. When you create content in Strapi, just paste the Unsplash URLs into the `imageUrl` field.

---

### Option 2: Upload Custom Images to Strapi

If you want to upload your own images instead:

#### Step 1: Prepare Your Images
1. Save images to `c:\Users\donsk\Downloads\nexus logic\strapi-images\`
2. Name them descriptively (e.g., `service-digital-engineering.jpg`)

#### Step 2: Upload to Strapi Media Library
1. Go to **Media Library** in Strapi (where you are now)
2. Click **"+ Add new assets"** button (top right)
3. Select your images or drag & drop
4. Click **Upload**

#### Step 3: Use Uploaded Images in Content
When creating content:
1. Click **Content Manager** → Select content type
2. When you see an image field, you can either:
   - **Option A:** Click to select from Media Library
   - **Option B:** Paste the Strapi URL (e.g., `http://localhost:1337/uploads/image_123.jpg`)

---

## Image Requirements for Each Section

### Services (6 images needed)
- **Digital Engineering**: Tech/code related
- **Automation**: Workflow/processes
- **Branding**: Design/creative
- **Google Maps**: Maps/location
- **Growth & Marketing**: Charts/analytics
- **Digital Innovation**: Futuristic/tech

**Current URLs** (already working):
```
https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80
https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80
https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80
https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80
https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80
https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80
```

### Portfolio Items (4 images needed)
**Current URLs:**
```
https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80 (Medical)
https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80 (Real Estate)
https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80 (Restaurant)
https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80 (E-commerce)
```

### Hero Slides (5 images needed)
**Current URLs:**
```
https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80
https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1920&q=80
https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80
https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1920&q=80
https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80
```

---

## Recommended Approach

### For Development (Now):
✅ **Use Unsplash URLs** - They work perfectly and are already configured

### For Production (Later):
1. Replace with your own project screenshots
2. Upload to Strapi Media Library
3. Or use a CDN service (Cloudinary, Imgix, etc.)

---

## How to Add Content with Images in Strapi

1. **Go to Content Manager** → **Services** → **Create new entry**
2. Fill in the fields:
   - **title**: "Digital Engineering"
   - **description**: "Advanced web and app development..."
   - **icon**: Select "Code2" from dropdown
   - **gradient**: "from-blue-500 to-cyan-500"
   - **imageUrl**: Paste `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80`
   - **order**: 1
3. **Save**
4. Switch locale to Arabic/French and add translations
5. **Publish**

Repeat for all services, portfolio items, and hero slides!

---

## Need Custom Images?

If you want me to:
1. Download the current Unsplash images
2. Create a batch upload script
3. Set up image optimization

Just let me know!
