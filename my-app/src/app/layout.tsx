import { Inter, Libre_Baskerville } from 'next/font/google'

const inter = Libre_Baskerville({ subsets: ['latin', 'latin-ext'], weight: ['700'] })

export const metadata = {
  title: 'História e Fé Católica',
  description: 'História e Fé Católica por Lorenzo Lazzarotto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
