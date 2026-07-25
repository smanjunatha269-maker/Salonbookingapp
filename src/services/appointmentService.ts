import type { ServiceType } from '../utils/constants'
import { getSupabaseClient } from './supabase'

export type AppointmentInput = {
  name: string
  age: number
  phone: string
  appointmentDate: string
  timeSlot: string
  serviceType: ServiceType
}

export type Appointment = {
  id: string
  name: string
  age: number
  phone: string
  appointment_date: string
  time_slot: string
  service_type: string
  created_at: string
}

export async function saveAppointment(appointment: AppointmentInput) {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('appointments')
    .insert({
      name: appointment.name,
      age: appointment.age,
      phone: appointment.phone,
      appointment_date: appointment.appointmentDate,
      time_slot: appointment.timeSlot,
      service_type: appointment.serviceType,
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

export async function getLatestAppointmentByPhone(phone: string): Promise<Appointment | null> {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .eq('phone', phone)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) {
    throw error
  }

  return data
}
