import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="py-8 flex justify-between max-w-screen-lg my-0 mx-auto items-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo with JC initials refering to 'João Carlos', my name."
          width={45}
          height={45}
          draggable={false}
        />
      </Link>
      <nav>
        <ul className="flex gap-8 font-medium">
          <li className="hover:opacity-90 transition-all duration-300 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:opacity-90 transition-all duration-300 ease-in-out">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:opacity-90 transition-all duration-300 ease-in-out">
            <Link href="/showcase">Showcase</Link>
          </li>
          <li className="mt-1">
            <Link href="https://www.github.com/joaocdfarias" target="_blank">
              <Image
                src="/github.svg"
                alt="GitHub Logo"
                draggable={false}
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li className="mt-1">
            <Link
              href="https://www.linkedin.com/in/joaocdfarias"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn Logo"
                draggable={false}
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
