-- =====================================================
-- Nexus Logic Client Portal - Database Schema
-- =====================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- TABLES
-- =====================================================

-- Projects Table (Updated with client_id)
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

-- Invoices Table
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

-- Support Tickets Table
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

-- Leads Table (Already exists, keeping for reference)
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

-- =====================================================
-- INDEXES
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_projects_client_id ON projects(client_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_invoices_project_id ON invoices(project_id);
CREATE INDEX IF NOT EXISTS idx_invoices_status ON invoices(status);
CREATE INDEX IF NOT EXISTS idx_tickets_client_id ON tickets(client_id);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON tickets(status);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- PROJECTS POLICIES
-- =====================================================

-- Users can view their own projects
CREATE POLICY "Users can view own projects"
ON projects FOR SELECT
USING (auth.uid() = client_id);

-- Users can update their own projects (optional, for future features)
CREATE POLICY "Users can update own projects"
ON projects FOR UPDATE
USING (auth.uid() = client_id);

-- =====================================================
-- INVOICES POLICIES
-- =====================================================

-- Users can view invoices for their projects
CREATE POLICY "Users can view own invoices"
ON invoices FOR SELECT
USING (
  project_id IN (
    SELECT id FROM projects WHERE client_id = auth.uid()
  )
);

-- =====================================================
-- TICKETS POLICIES
-- =====================================================

-- Users can view their own tickets
CREATE POLICY "Users can view own tickets"
ON tickets FOR SELECT
USING (client_id = auth.uid());

-- Users can create their own tickets
CREATE POLICY "Users can create tickets"
ON tickets FOR INSERT
WITH CHECK (client_id = auth.uid());

-- Users can update their own tickets
CREATE POLICY "Users can update own tickets"
ON tickets FOR UPDATE
USING (client_id = auth.uid());

-- =====================================================
-- LEADS POLICIES
-- =====================================================

-- Anyone can insert leads (public form)
CREATE POLICY "Anyone can insert leads"
ON leads FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view leads (admin only in production)
CREATE POLICY "Authenticated users can view leads"
ON leads FOR SELECT
USING (auth.role() = 'authenticated');

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON projects
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_invoices_updated_at ON invoices;
CREATE TRIGGER update_invoices_updated_at
BEFORE UPDATE ON invoices
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_tickets_updated_at ON tickets;
CREATE TRIGGER update_tickets_updated_at
BEFORE UPDATE ON tickets
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- SAMPLE DATA (For Testing)
-- =====================================================

-- NOTE: Replace 'YOUR_USER_ID' with actual user UUID from auth.users
-- You can get this by running: SELECT id FROM auth.users;

-- Sample Projects
-- INSERT INTO projects (client_id, title, description, status, progress, drive_link) VALUES
-- ('YOUR_USER_ID', 'Medical Platform Development', 'Complete clinic management system with booking and payments', 'in-progress', 65, 'https://drive.google.com/folder/sample1'),
-- ('YOUR_USER_ID', 'E-commerce Website', 'Modern online store with inventory management', 'completed', 100, 'https://drive.google.com/folder/sample2');

-- Sample Invoices
-- INSERT INTO invoices (project_id, amount, currency, status, due_date, pdf_url) VALUES
-- ((SELECT id FROM projects WHERE title = 'Medical Platform Development'), 5000.00, 'USD', 'pending', '2026-03-01', 'https://example.com/invoice1.pdf'),
-- ((SELECT id FROM projects WHERE title = 'E-commerce Website'), 3500.00, 'USD', 'paid', '2026-02-01', 'https://example.com/invoice2.pdf');

-- Sample Tickets
-- INSERT INTO tickets (client_id, subject, description, status, priority) VALUES
-- ('YOUR_USER_ID', 'Login Issue', 'Cannot access dashboard from mobile device', 'open', 'high'),
-- ('YOUR_USER_ID', 'Feature Request', 'Add export functionality to reports', 'in-progress', 'medium');

-- =====================================================
-- ADMIN NOTES
-- =====================================================

-- To create a test user:
-- 1. Go to Supabase Dashboard > Authentication > Users
-- 2. Click "Add User" and create with email/password
-- 3. Copy the user ID
-- 4. Replace 'YOUR_USER_ID' in sample data above
-- 5. Run the INSERT statements

-- To test RLS policies:
-- 1. Login as the test user
-- 2. Try to access /dashboard
-- 3. Verify you only see your own data
