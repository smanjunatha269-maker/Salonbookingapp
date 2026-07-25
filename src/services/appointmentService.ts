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
