'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/logo.svg'
import sun from '../public/sun.svg'
import moon from '../public/moon.svg'

export const Header = () => {
  const [theme, setTheme] = useState(false)
  localStorage.theme = theme ? 'light' : 'dark'

  useEffect(() => {
    const faviconEl = document.querySelector('link[rel="icon"]')

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      faviconEl!.setAttribute('href', '/logo.ico')
    } else {
      document.documentElement.classList.remove('dark')
      faviconEl!.setAttribute('href', '/logo-dark.ico')
    }
  })

  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <header>
      <nav className="flex justify-end py-12 dark:text-light lowercase">
        <Link href="/" className="mr-auto ml-[50%]">
          <Image priority src={logo} alt="João Carlos" className="invert dark:invert-0 " />
        </Link>
        <ul className="flex gap-9 ">
          <li>
            <Link href="/blog" className="hover:opacity-80 transition-opacity duration-300">
              Blog
            </Link>
          </li>
          <li>
            <button onClick={changeTheme}>
              <Image
                src={theme ? moon : sun}
                alt="Toggle Color Mode Icon"
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
