CREATE TABLE IF NOT EXISTS appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 1 AND age <= 120),
  phone TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  service_type TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous reads"
  ON appointments
  FOR SELECT
  TO anon
  USING (true);
