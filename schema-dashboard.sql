-- =====================================================
-- Nexus Logic Admin Dashboard - Content Management
-- =====================================================

-- 1. Profiles Table for Role Management
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE,
  role TEXT DEFAULT 'client' CHECK (role IN ('admin', 'client')),
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Hero Slides Table
CREATE TABLE IF NOT EXISTS dynamic_hero_slides (
  id SERIAL PRIMARY KEY,
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  title_ar TEXT,
  title_fr TEXT,
  title_en TEXT,
  subtitle_ar TEXT,
  subtitle_fr TEXT,
  subtitle_en TEXT,
  description_ar TEXT,
  description_fr TEXT,
  description_en TEXT,
  cta_ar TEXT,
  cta_fr TEXT,
  cta_en TEXT,
  link TEXT,
  icon_name TEXT, -- Lucide icon name string
  gradient_class TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Services (Bento Grid) Table
CREATE TABLE IF NOT EXISTS dynamic_services (
  id SERIAL PRIMARY KEY,
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  title_ar TEXT,
  title_fr TEXT,
  title_en TEXT,
  description_ar TEXT,
  description_fr TEXT,
  description_en TEXT,
  icon_name TEXT,
  gradient_class TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS for content tables (Public read, Admin only write)
ALTER TABLE dynamic_hero_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE dynamic_services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view hero slides" ON dynamic_hero_slides FOR SELECT USING (active = true);
CREATE POLICY "Public can view services" ON dynamic_services FOR SELECT USING (active = true);

-- Admin write access (Requires profile role check)
CREATE POLICY "Admins can manage hero slides" 
ON dynamic_hero_slides FOR ALL 
USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage services" 
ON dynamic_services FOR ALL 
USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (new.id, new.email, 'client');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
