"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Popover } from "../components/Popover";

export default function Home() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <main className="mx-auto my-0 flex max-w-screen-lg justify-between gap-16 items-center h-[calc(100vh-115px)]">
      <section className="flex flex-col gap-5">
        <h1 className="font-semibold text-5xl">Hi, I&rsquo;m João Farias 👋</h1>
        <div className="text-lg">
          I&rsquo;m a Software Engineer based in{" "}
          <strong
            onMouseEnter={() => setIsPopoverOpen(true)}
            onMouseLeave={() => setIsPopoverOpen(false)}
            className="cursor-pointer"
          >
            <u className="relative">
              <Popover show={isPopoverOpen} />
              Salvador, Brazil
            </u>
          </strong>
          , currently working at{" "}
          <Link
            href="https://www.sanar.com.br"
            target="_blank"
            className="underline"
          >
            Sanar
          </Link>
          . I specialize in both frontend and backend development, with a strong
          interest in architecture, design patterns, infrastructure and cloud
          computing. In my free time, I enjoy running 🏃‍♂️, martial arts 🥋 and UI
          design 🎨
        </div>
      </section>
      <Image
        src="/image.jpg"
        alt="João Farias's photo"
        width={300}
        height={300}
        className="rounded-3xl"
        draggable={false}
        placeholder="blur"
        blurDataURL="/image.jpg"
      />
    </main>
  );
}
