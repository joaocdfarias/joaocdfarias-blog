'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/logo.svg'

export const Header = () => {
  useEffect(() => {
    const faviconEl = document.querySelector('link[rel="icon"]')

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      faviconEl!.setAttribute('href', '/logo.ico')
    } else {
      faviconEl!.setAttribute('href', '/logo-dark.ico')
    }
  })

  return (
    <header>
      <nav className="flex justify-end py-12 text-light lowercase">
        <Link href="/" className="mr-auto ml-[50%]">
          <Image priority src={logo} alt="João Carlos" />
        </Link>
        <ul className="flex gap-9 ">
          <li>
            <Link href="/blog" className="hover:opacity-80 transition-opacity duration-300">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
