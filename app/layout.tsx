import './globals.css'

import { Be_Vietnam_Pro } from '@next/font/google'
import { Header } from '@/components/header'

const beVietnamPro = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={beVietnamPro.className}>
      <head />
      <body className="bg-light dark:bg-dark w-[75%] mx-auto transition-colors duration-500">
        <Header />
        {children}
      </body>
    </html>
  )
}
