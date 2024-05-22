import './globals.css'

import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} bg-background bg-blur-gradient-mobile bg-cover sm:bg-blur-gradient`}
      >
        {children}
      </body>
    </html>
  )
}
