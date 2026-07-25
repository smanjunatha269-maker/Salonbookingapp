# Salon Booking App

A minimal React + Vite + Tailwind CSS application for salon appointment booking.

## Stack

- React 19
- Vite
- Tailwind CSS
- React Router
- Supabase

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

## Supabase setup

1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Copy `.env.example` to `.env` and add your project URL and anon key.
3. Run the migration in `supabase/migrations/001_create_appointments.sql` using the Supabase SQL editor or CLI.

The `appointments` table stores:

- `name`, `age`, `phone`
- `appointment_date`, `time_slot`, `service_type`
- `created_at`

Bookings are saved when **Submit booking** is clicked on the Booking Form page.

## Project structure

```
src/
├── assets/
├── components/
├── hooks/
├── pages/
├── services/
└── utils/
```

## Routes

| Path | Page |
|------|------|
| `/` | Welcome |
| `/calendar` | Calendar |
| `/booking` | Booking Form |
| `/confirmation` | Confirmation |
| `/my-booking` | My Booking |
