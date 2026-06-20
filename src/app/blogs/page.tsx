import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Footer, Header } from "@/components/site-shell";
import { blogPosts } from "@/lib/site-content";
import { MoveRightIcon } from "lucide-react";

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Blogs"
          title="Market insights, project updates, and investor intelligence."
          body="Editorial space for Zaman Developers updates, Isla Bay launch news, Dubai Islands market analysis, and broker resources."
          backgroundImage="/isla/11.jpeg"
        />
        <section className="bg-[var(--color-white)] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-[1480px]">
            <div className="mb-10 flex items-center justify-between border-l-[3px] border-[var(--color-metallic-gold)] pl-5">
              <h2 className="text-4xl font-medium uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                News & Blogs
              </h2>
            </div>
            <div className="grid gap-7 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group"
              >
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
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.04em] text-[var(--color-cool-gray)]">
                  {post.category} - {post.displayDate}
                </p>
                <h2 className="mt-3 text-2xl font-extrabold uppercase leading-tight text-[var(--color-primary-navy)]">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="transition hover:text-[var(--color-metallic-gold)]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-lg leading-7 text-[var(--color-charcoal)]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.06em] text-[var(--color-metallic-gold)] transition hover:text-[var(--color-primary-navy)]"
                >
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </article>
            ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
