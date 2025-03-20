-- Create categories table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create resources table
CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  url TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  category_id INTEGER REFERENCES categories(id),
  tags TEXT,
  pricing VARCHAR(50) DEFAULT 'Free',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create table for pending submissions that need moderation
CREATE TABLE pending_resources (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  category_id INTEGER REFERENCES categories(id),
  tags TEXT,
  pricing VARCHAR(50) DEFAULT 'Free',
  submitter_email VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending'
);

-- Create ratings table
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  user_email VARCHAR(255),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster lookups
CREATE INDEX idx_ratings_resource_id ON ratings(resource_id);

-- Add some initial categories
INSERT INTO categories (name, slug, description) VALUES
('UI Components', 'ui-components', 'Pre-built UI components and libraries'),
('Design Systems', 'design-systems', 'Complete design systems and guidelines'),
('Icons', 'icons', 'Icon sets and libraries'),
('Illustrations', 'illustrations', 'Illustration libraries and assets'),
('Fonts', 'fonts', 'Typography and font resources'),
('Colors', 'colors', 'Color palettes and tools'),
('CSS Frameworks', 'css-frameworks', 'CSS frameworks and libraries'),
('JavaScript Libraries', 'javascript-libraries', 'JavaScript libraries and frameworks'),
('Design Tools', 'design-tools', 'Tools for designers'),
('Development Tools', 'development-tools', 'Tools for developers');

-- Create RLS policies
-- Enable RLS on the tables
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE pending_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to resources and categories
CREATE POLICY "Allow public read access to resources" ON resources FOR SELECT USING (true);
CREATE POLICY "Allow public read access to categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access to ratings" ON ratings FOR SELECT USING (true);

-- Only allow admins to insert/update/delete
CREATE POLICY "Allow admin to manage resources" ON resources FOR ALL USING (auth.uid() IN (SELECT auth.uid() FROM auth.users WHERE is_admin = true));
CREATE POLICY "Allow admin to manage categories" ON categories FOR ALL USING (auth.uid() IN (SELECT auth.uid() FROM auth.users WHERE is_admin = true));

-- Allow anyone to submit a pending resource
CREATE POLICY "Allow anyone to submit a pending resource" ON pending_resources FOR INSERT USING (true);
-- Only admins can view and manage pending resources
CREATE POLICY "Allow admin to manage pending resources" ON pending_resources FOR ALL USING (auth.uid() IN (SELECT auth.uid() FROM auth.users WHERE is_admin = true));

-- Allow users to create their own ratings
CREATE POLICY "Allow users to create ratings" ON ratings FOR INSERT WITH CHECK (true);

-- Allow users to update only their own ratings
CREATE POLICY "Allow users to update their own ratings" ON ratings 
FOR UPDATE USING (user_email = current_user_email());

-- Add average_rating column to resources table
ALTER TABLE resources ADD COLUMN average_rating NUMERIC(3,2) DEFAULT NULL;
ALTER TABLE resources ADD COLUMN ratings_count INTEGER DEFAULT 0;

