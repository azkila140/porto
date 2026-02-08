-- =====================================================
-- ADMIN SETUP - Just run this after creating the user!
-- =====================================================

-- Step 1: First create a user in Supabase Dashboard:
--   Authentication → Users → Add User
--   Email: admin@nexuslogic.online
--   Password: [your choice]
--   ✅ Auto Confirm: Enable

-- Step 2: Then run THIS complete script:

-- Grant admin role to the user (finds user automatically by email)
UPDATE profiles 
SET role = 'admin', 
    full_name = 'Admin User',
    updated_at = NOW()
WHERE id = (
  SELECT id 
  FROM auth.users 
  WHERE email = 'admin@nexuslogic.online'
);

-- If profile doesn't exist yet, create it
INSERT INTO profiles (id, email, role, full_name)
SELECT 
  id,
  email,
  'admin' as role,
  'Admin User' as full_name
FROM auth.users
WHERE email = 'admin@nexuslogic.online'
ON CONFLICT (id) DO UPDATE
SET role = 'admin', 
    full_name = 'Admin User',
    updated_at = NOW();

-- Verify the admin was created successfully
SELECT 
  p.id,
  p.email,
  p.role,
  p.full_name,
  p.created_at
FROM profiles p
WHERE p.role = 'admin';
