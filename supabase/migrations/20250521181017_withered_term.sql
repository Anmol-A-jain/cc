/*
  # Initial Schema Setup for CapitalCorner

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - name (text)
      - role (text)
      - city (text)
      - phone (text)
      - created_at (timestamp)
      - referral_code (text)
      - referrer_id (uuid, foreign key)
    
    - leads
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - customer_name (text)
      - customer_email (text)
      - customer_phone (text)
      - loan_type (text)
      - loan_amount (numeric)
      - status (text)
      - created_at (timestamp)
    
    - earnings
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - lead_id (uuid, foreign key)
      - amount (numeric)
      - status (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  role text NOT NULL CHECK (role IN ('partner', 'admin')),
  city text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now(),
  referral_code text UNIQUE,
  referrer_id uuid REFERENCES users(id),
  CONSTRAINT valid_phone CHECK (length(phone) >= 10)
);

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  loan_type text NOT NULL CHECK (loan_type IN ('home', 'business', 'personal', 'car', 'mortgage')),
  loan_amount numeric NOT NULL CHECK (loan_amount > 0),
  status text NOT NULL CHECK (status IN ('new', 'contacted', 'processing', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_customer_phone CHECK (length(customer_phone) >= 10)
);

-- Create earnings table
CREATE TABLE IF NOT EXISTS earnings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  lead_id uuid REFERENCES leads(id) NOT NULL,
  amount numeric NOT NULL CHECK (amount > 0),
  status text NOT NULL CHECK (status IN ('pending', 'approved', 'paid')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE earnings ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Partners can read referral network"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = referrer_id);

-- Create policies for leads table
CREATE POLICY "Partners can read own leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Partners can create leads"
  ON leads
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create policies for earnings table
CREATE POLICY "Partners can read own earnings"
  ON earnings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create admin policies
CREATE POLICY "Admins can read all users"
  ON users
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admins can read all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admins can read all earnings"
  ON earnings
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));