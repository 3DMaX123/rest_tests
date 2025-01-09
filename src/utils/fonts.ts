import { Prata, Inter } from 'next/font/google'

export const prata = Prata({
    subsets: ["cyrillic"],
    weight: '400',
    display: 'swap',
    variable: '--font-prata',
})

export const inter = Inter({
    subsets: ['cyrillic'],
    display: 'swap',
    variable: '--font-inter',
})
