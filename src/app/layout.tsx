import './globals.css'
import 'animate.css/animate.min.css'

import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: {
      url: '/favicon.png',
      type: 'image/png',
      sizes: '162x162',
    },
  },
  title:
    'Dev Paulo  | Web Developer | Desenvolvedor Web | Front End | Back-End ',
  description:
    'Desenvolvedor web criativo e apaixonado, com experiência em criar websites responsivos e otimizados. Especializado em HTML, CSS, JavaScript e frameworks modernos. Confira meu portfólio para projetos inovadores e soluções de design web personalizadas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} w-screen bg-background bg-blur-gradient-mobile bg-cover sm:bg-blur-gradient`}
      >
        {children}
      </body>
    </html>
  )
}
