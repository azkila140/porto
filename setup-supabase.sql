-- =====================================================
-- Quick Setup Script for Nexus Logic Client Portal
-- =====================================================
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/pxhjxilpswhisbdhpifr/sql

-- 1. Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create tables
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'planning' CHECK (status IN ('planning', 'in-progress', 'completed', 'on-hold')),
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  drive_link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invoices (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  status TEXT DEFAULT 'pending' CHECK (status IN ('paid', 'pending', 'overdue')),
  due_date DATE NOT NULL,
  paid_date DATE,
  pdf_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tickets (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in-progress', 'resolved', 'closed')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  industry TEXT NOT NULL,
  service TEXT NOT NULL,
  budget TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies
CREATE POLICY "Users can view own projects" ON projects FOR SELECT USING (auth.uid() = client_id);
CREATE POLICY "Users can view own invoices" ON invoices FOR SELECT USING (project_id IN (SELECT id FROM projects WHERE client_id = auth.uid()));
CREATE POLICY "Users can view own tickets" ON tickets FOR SELECT USING (client_id = auth.uid());
CREATE POLICY "Users can create tickets" ON tickets FOR INSERT WITH CHECK (client_id = auth.uid());
CREATE POLICY "Users can update own tickets" ON tickets FOR UPDATE USING (client_id = auth.uid());
CREATE POLICY "Anyone can insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated users can view leads" ON leads FOR SELECT USING (auth.role() = 'authenticated');

-- 5. Create indexes
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON projects(client_id);
CREATE INDEX IF NOT EXISTS idx_invoices_project_id ON invoices(project_id);
CREATE INDEX IF NOT EXISTS idx_tickets_client_id ON tickets(client_id);

-- 6. Create update trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 7. Create triggers
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_invoices_updated_at ON invoices;
CREATE TRIGGER update_invoices_updated_at BEFORE UPDATE ON invoices FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_tickets_updated_at ON tickets;
CREATE TRIGGER update_tickets_updated_at BEFORE UPDATE ON tickets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- DONE! Now create a test user:
-- =====================================================
-- 1. Go to: https://supabase.com/dashboard/project/pxhjxilpswhisbdhpifr/auth/users
-- 2. Click "Add User" 
-- 3. Email: demo@nexuslogic.com
-- 4. Password: Demo123456!
-- 5. Click "Create User"
-- 6. Copy the user ID from the users table

-- =====================================================
-- Optional: Add sample data (replace USER_ID_HERE)
-- =====================================================
-- After creating user, run these with the actual user ID:

-- INSERT INTO projects (client_id, title, description, status, progress, drive_link) VALUES
-- ('USER_ID_HERE', 'E-commerce Platform', 'Complete online store with payment integration', 'in-progress', 65, 'https://drive.google.com/drive/folders/sample1'),
-- ('USER_ID_HERE', 'Mobile App Development', 'iOS and Android app for restaurant booking', 'planning', 25, 'https://drive.google.com/drive/folders/sample2');

-- INSERT INTO invoices (project_id, amount, currency, status, due_date, pdf_url) VALUES
-- ((SELECT id FROM projects WHERE title = 'E-commerce Platform'), 5000.00, 'USD', 'pending', '2026-03-15', 'https://example.com/invoice1.pdf'),
-- ((SELECT id FROM projects WHERE title = 'Mobile App Development'), 3500.00, 'USD', 'paid', '2026-02-01', 'https://example.com/invoice2.pdf');
