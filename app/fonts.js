import { Poppins, Caveat } from 'next/font/google'


export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700', '800', '900']
})

export const caveat = Caveat({
    subsets: ['latin'],
    display: 'swap',
    weight: "700"
})