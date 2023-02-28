import './index.css'

export const metadata = {
  title: 'ZagaLab Challenge',
  description: 'ZagaLab Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
