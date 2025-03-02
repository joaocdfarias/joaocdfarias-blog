import { PostCard } from "../../components/PostCard";

export default function Blog() {
  return (
    <main className="mx-auto mt-32 my-0 max-w-screen-lg">
      <section>
        <h1 className="font-semibold text-5xl mb-5">Blog posts</h1>
        <p className="text-lg">
          Place where I post my thoughts, learning journey and more!
        </p>
      </section>
      <section className="mt-16">
        <PostCard
          title="What I learned in 2024"
          summary="In 2024 I learned X, Y and Z. I think the most important thing I've learned was..."
        />
      </section>
    </main>
  );
}
