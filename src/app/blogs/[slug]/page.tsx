import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "@/components/site-shell";
import { blogPosts } from "@/lib/site-content";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Zaman Developers",
    },
    publisher: {
      "@type": "Organization",
      name: "Zaman Developers",
    },
    mainEntityOfPage: `/blogs/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <article>
          <section className="relative flex min-h-[76vh] items-end overflow-hidden px-5 pb-16 pt-36 text-white lg:px-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative z-10 mx-auto w-full max-w-6xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/82">
                {post.category} - {post.displayDate}
              </p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-tight tracking-[0.04em] sm:text-5xl lg:text-[64px]">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
                {post.excerpt}
              </p>
            </div>
          </section>

          <section className="px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_0.28fr]">
              <div className="space-y-12">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="border-l-[3px] border-[#9f264a] pl-5 text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#111816]">
                      {section.heading}
                    </h2>
                    <div className="mt-6 space-y-5 text-lg leading-8 text-[#3f4a46]">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="border border-[#dfd6c5] bg-[#faf7f0] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9f264a]">
                    Article Focus
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="border border-[#d8cfbf] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#3f4a46]"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </article>

        <section className="border-t border-[#e7dece] px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between gap-6">
              <h2 className="border-l-[3px] border-[#9f264a] pl-5 text-3xl font-medium uppercase tracking-[0.08em] text-[#111816]">
                More Insights
              </h2>
              <Link
                href="/blogs"
                className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#9f264a] transition hover:text-[#16211f]"
              >
                All News
              </Link>
            </div>
            <div className="mt-8 grid gap-7 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <article key={item.slug} className="group">
                  <Link href={`/blogs/${item.slug}`} className="block">
                    <div className="relative aspect-[1.48] overflow-hidden bg-[#eee5d7]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.04em] text-[#8c8c8c]">
                    {item.category} - {item.displayDate}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold uppercase leading-tight text-[#111816]">
                    <Link
                      href={`/blogs/${item.slug}`}
                      className="transition hover:text-[#9f264a]"
                    >
                      {item.title}
                    </Link>
                  </h3>
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
