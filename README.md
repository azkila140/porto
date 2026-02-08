# Nexus Logic Agency Platform

A high-performance, trilingual (AR/FR/EN) marketing agency platform built with Next.js 14, featuring an integrated client portal with Supabase authentication.

## 🎯 Features

- **Trilingual Support**: Arabic (RTL default), French, and English
- **Dark Premium UI**: Deep blue (#020617) with emerald accents (#10b981)
- **Lead Capture**: Smart form with validation and n8n webhook integration
- **Client Portal**: Secure dashboard for projects, invoices, and support
- **13 Industry Solutions**: Dynamic templates for various sectors
- **5 Service Pillars**: Engineering, Automation, Branding, Maps, Growth

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Custom Theme
- **Animations**: Framer Motion
- **Backend**: Supabase (Database + Auth)
- **Validation**: Zod
- **Icons**: Lucide React
- **Automation**: n8n Webhook Integration

## 📂 Project Structure

```
nexus-logic/
├── app/
│   ├── [lang]/              # Locale-based routing (ar, fr, en)
│   │   ├── layout.tsx       # Root layout with RTL support
│   │   ├── page.tsx         # Home page
│   │   ├── login/           # Authentication pages
│   │   └── dashboard/       # Protected client portal
│   └── globals.css          # Global styles
├── components/
│   ├── sections/            # Marketing section components
│   │   ├── Hero.tsx
│   │   └── BentoGrid.tsx
│   ├── LeadForm.tsx         # Lead capture form
│   └── LanguageSwitcher.tsx # Language selector
├── lib/
│   ├── i18n/                # Internationalization
│   │   ├── config.ts
│   │   ├── dictionaries.ts
│   │   └── dictionaries/    # Translation files
│   ├── actions/             # Server Actions
│   │   └── leads.ts
│   ├── supabase/
│   │   └── client.ts
│   └── utils.ts
├── middleware.ts            # Locale detection & routing
├── supabase-schema.sql      # Database schema with RLS
└── tailwind.config.js
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# n8n Webhook (optional)
N8N_WEBHOOK_URL=your-n8n-webhook-url
```

### 3. Setup Supabase Database

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor
3. Run the SQL script from `supabase-schema.sql`
4. Copy your project URL and anon key to `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - you'll be redirected to `/ar` (Arabic) by default.

## 🌍 Language Routes

- **Arabic**: `/ar` (Default, RTL)
- **French**: `/fr`
- **English**: `/en`

The language switcher preserves your current page when switching languages.

## 📊 Database Schema

### Tables

#### leads
- Lead capture from marketing site
- Fields: name, whatsapp, industry, service, budget, status
- Public insert, admin read-only

#### projects
- Client project tracking
- Fields: title, status, progress, drive_link
- RLS: Users see only their own projects

#### invoices
- Project billing
- Fields: amount, status, due_date
- RLS: Users see only their project invoices

## 🎨 Design System

### Colors
- **Brand Dark**: `#020617`
- **Brand Emerald**: `#10b981`
- Gradients with blue, purple, orange accents

### Typography
- **Arabic**: Tajawal font family
- **Other**: System font stack

### Animations
- Framer Motion for reveals and interactions
- Gradient hover effects
- Scroll-triggered animations

## 🔐 Client Portal

### Features (To Be Implemented)
- [ ] Supabase Auth login
- [ ] Protected dashboard routes
- [ ] Project progress tracking
- [ ] Invoice management
- [ ] Support ticket system

See `implementation_plan.md` for detailed Client Portal roadmap.

## 📝 Lead Capture Flow

1. User fills out the lead form
2. Form validated with Zod schema
3. Data saved to Supabase `leads` table
4. Optional webhook triggered to n8n for automation
5. Success/error feedback displayed

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Responsive Design

- Mobile-first approach
- RTL layout fully tested on mobile
- Glassmorphism effects
- Touch-optimized interactions

## 🚧 Roadmap

### Phase 1-4: ✅ Complete
- [x] Project setup & i18n
- [x] Global layout & theme
- [x] Marketing engine (Hero, BentoGrid)
- [x] Lead capture system

### Phase 5: 🔄 Next Steps
- [ ] Client Portal authentication
- [ ] Dashboard UI components
- [ ] Protected routes
- [ ] RLS policy testing

### Phase 6: 📅 Planned
- [ ] Dynamic Solutions pages (13 industries)
- [ ] Services page
- [ ] Work/Portfolio page
- [ ] Contact page
- [ ] Performance optimization
- [ ] Production deployment

## 📄 License

Proprietary - Nexus Logic Agency Platform

## 🤝 Support

For questions or support, contact the Nexus Logic team.

---

Built with ❤️ using Next.js 14 and Supabase
