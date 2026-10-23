-- Create Enquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create Subscribers Table
CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Allow Public Inserts for Enquiries
CREATE POLICY "Allow public insert on enquiries" 
ON public.enquiries 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Allow Service Role to read enquiries
CREATE POLICY "Allow service role full access on enquiries"
ON public.enquiries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Allow Public Inserts for Subscribers
CREATE POLICY "Allow public insert on subscribers" 
ON public.subscribers 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Allow Service Role to read subscribers
CREATE POLICY "Allow service role full access on subscribers"
ON public.subscribers
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
