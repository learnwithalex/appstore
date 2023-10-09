import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import {Providers} from "./providers/providers";

const sora = Sora({ weight: ['100','200','300','400','500','600','700','800'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qapp Store',
  description: 'A Multiplatform App store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={sora.className}>
      <Providers>
          {children}
      </Providers>
        </body>
    </html>
  )
}
