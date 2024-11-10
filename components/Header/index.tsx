import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="py-10 flex justify-between max-w-screen-lg my-0 mx-auto items-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo with JC initials refering to 'João Carlos', my name."
          width={45}
          height={35}
          draggable={false}
        />
      </Link>
      <nav>
        <ul className="flex gap-8 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/showcase">Showcase</Link>
          </li>
          <li>
            <Link href="https://www.github.com/joaocdfarias">GitHub</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/joaocdfarias">
              LinkedIn
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
