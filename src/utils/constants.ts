export const SALON_NAME = 'Serenity Salon'

export const SERVICES = [
  'Haircut',
  'Beard Trim',
  'Hair Spa',
  'Facial',
  'Head Massage',
  'Hair Color',
] as const

export type ServiceType = (typeof SERVICES)[number]
