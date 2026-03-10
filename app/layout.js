import './globals.css'

export const metadata = {
  title: 'NovexOS - Next Generation Operating System',
  description: 'A fully independent desktop operating system built from scratch by Omega Developments. Custom kernel, memory management, and design language.',
  keywords: 'NovexOS, operating system, custom OS, kernel, open source',
  authors: [{ name: 'Omega Developments' }],
  openGraph: {
    title: 'NovexOS - Next Generation Operating System',
    description: 'Built from scratch. Performance-first. Secure by design.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
