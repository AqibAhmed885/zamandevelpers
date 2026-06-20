import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/site-content";

export function NewsBlogsSection() {
  return (
    <section className="bg-[var(--color-white)] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-360">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <h2 className="border-l-[3px] border-[var(--color-metallic-gold)] pl-5 text-2xl font-medium uppercase tracking-[0.08em] text-[var(--color-primary-navy)] sm:text-3xl">
            News & Blogs
          </h2>
          <Link
            href="/blogs"
            className="inline-flex bg-[var(--color-metallic-gold)] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]"
          >
            See All News
          </Link>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blogs/${post.slug}`} className="block">
                <div className="relative aspect-[1.34] overflow-hidden bg-[var(--color-off-white)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
              <p className="mt-6 text-xs uppercase tracking-[0.04em] text-[var(--color-cool-gray)]">
                {post.category} - {post.displayDate}
              </p>
              <h3 className="mt-3 text-xl font-semibold uppercase leading-tight text-[var(--color-primary-navy)]">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="transition hover:text-[var(--color-metallic-gold)]"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-charcoal)]">
                {post.excerpt}
              </p>
              <Link
                href={`/blogs/${post.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.06em] text-[var(--color-metallic-gold)] transition hover:text-[var(--color-primary-navy)]"
              >
                Read More <span aria-hidden="true">-&gt;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
