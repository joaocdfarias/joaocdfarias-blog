import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto my-0 flex max-w-screen-lg justify-between gap-16 items-center h-[calc(100vh-115px)]">
      <section className="flex flex-col gap-5">
        <h1 className="font-semibold text-5xl">Hi, I&rsquo;m João Farias 👋</h1>
        <p className="text-lg">
          I&rsquo;m a Software Engineer based in{" "}
          <strong className="cursor-pointer">
            <u>Salvador, Brazil</u>
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
          computing. In my free time, I enjoy running 🏃‍♂️, martial arts 🥋 and
          UI design 🎨
        </p>
      </section>
      <Image
        src="/image.jpg"
        alt="João Farias's photo"
        width={300}
        height={300}
        className="rounded-3xl"
      />
    </main>
  );
}
