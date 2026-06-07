import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageIntro } from "@/components/site-shell";
import { blogPosts } from "@/lib/site-content";

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Blogs"
          title="Market insights, project updates, and investor intelligence."
          body="Editorial space for Zaman Developers updates, Isla Bay launch news, Dubai Islands market analysis, and broker resources."
        />
        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-[1480px]">
            <div className="mb-10 flex items-center justify-between border-l-[3px] border-[#9f264a] pl-5">
              <h2 className="text-4xl font-medium uppercase tracking-[0.08em] text-[#111816]">
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
                  <div className="relative aspect-[1.34] overflow-hidden bg-[#eee5d7]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.04em] text-[#8c8c8c]">
                  {post.category} - {post.displayDate}
                </p>
                <h2 className="mt-3 text-2xl font-extrabold uppercase leading-tight text-[#111816]">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="transition hover:text-[#9f264a]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-lg leading-7 text-[#262b29]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.06em] text-[#9f264a] transition hover:text-[#16211f]"
                >
                  Read More <span aria-hidden="true">-&gt;</span>
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
