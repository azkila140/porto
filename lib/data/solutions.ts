export const industries = [
    'medical',
    'real-estate',
    'restaurants',
    'retail',
    'education',
    'automotive',
    'finance',
    'construction',
    'technology',
    'manufacturing',
    'logistics',
    'services',
    'other'
] as const

export type Industry = typeof industries[number]
