import './globals.css'

import Header from '@/components/header/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
      <Header />
      {children}
      </body>
    </html>
  )
}
