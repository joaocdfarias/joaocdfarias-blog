import Link from 'next/link'
import Image from 'next/image'

import profile from '../public/profile.webp'
import rounded from '../public/rounded.svg'
import dots from '../public/dots.svg'
import github from '../public/github.svg'
import twitter from '../public/twitter.svg'
import linkedin from '../public/linkedin.svg'

export default function Home() {
  return (
    <>
      <main>
        <div className="flex items-center gap-11">
          <div className="flex flex-col">
            <Image src={rounded} alt="Rounded Dots" priority />
            <Image
              src={profile}
              alt="João Carlos"
              className="rounded-2xl shadow-2xl mt-[-170px] ml-[170px] z-10 w-[363px] h-[363px]"
              priority
            />
            <Image src={dots} alt="Dots" className="ml-[480px] mt-[-70px]" priority />
          </div>
          <div>
            <h1 className="text-5xl dark:text-light">
              hello, my name is <strong>João Carlos</strong> <br /> welcome to my website.
            </h1>
            <p className="text-2xl mt-2 dark:text-light">
              i’m a <strong>front end</strong> developer <br /> currently working at{' '}
              <strong>
                <Link className="underline" href="https://sanar.com.br/">
                  sanar
                </Link>
              </strong>
              .
            </p>
            <div className="flex gap-8 mt-6 invert dark:invert-0">
              <Link href="https://www.github.com/joaocdfarias" target="_blank">
                <Image src={github} alt="My GitHub" className="hover:opacity-80 transition-opacity duration-300" />
              </Link>
              <Link href="https://www.linkedin.com/in/joaocdfarias" target="_blank">
                <Image src={linkedin} alt="My LinkedIn" className="hover:opacity-80 transition-opacity duration-300" />
              </Link>
              <Link href="https://www.twitter.com/joaocdfarias" target="_blank">
                <Image src={twitter} alt="My Twitter" className="hover:opacity-80 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
