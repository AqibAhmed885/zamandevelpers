import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "@/components/site-shell";
import { blogPosts } from "@/lib/site-content";
import { PageHero } from "@/components/page-hero";

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
        <PageHero
          eyebrow={post.category}
          title={post.title}
          body={post.excerpt}
          backgroundImage={post.image}
        />
        <article>
          

          <section className="px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_0.28fr]">
              <div className="space-y-12">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="border-l-[3px] border-[var(--color-metallic-gold)] pl-5 text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-[var(--color-primary-navy)]">
                      {section.heading}
                    </h2>
                    <div className="mt-6 space-y-5 text-lg leading-8 text-[var(--color-charcoal)]">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="border border-[var(--color-cool-gray)]/35 bg-[var(--color-off-white)] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-metallic-gold)]">
                    Article Focus
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="border border-[var(--color-cool-gray)]/35 bg-[var(--color-white)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-charcoal)]"
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

        <section className="border-t border-[var(--color-cool-gray)]/25 px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between gap-6">
              <h2 className="border-l-[3px] border-[var(--color-metallic-gold)] pl-5 text-3xl font-medium uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                More Insights
              </h2>
              <Link
                href="/blogs"
                className="text-sm font-medium uppercase tracking-[0.08em] text-[var(--color-metallic-gold)] transition hover:text-[var(--color-primary-navy)]"
              >
                All News
              </Link>
            </div>
            <div className="mt-8 grid gap-7 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <article key={item.slug} className="group">
                  <Link href={`/blogs/${item.slug}`} className="block">
                    <div className="relative aspect-[1.48] overflow-hidden bg-[var(--color-off-white)]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.04em] text-[var(--color-cool-gray)]">
                    {item.category} - {item.displayDate}
                  </p>
                  <h3 className="mt-2 text-xl font-bold uppercase leading-tight text-[var(--color-primary-navy)]">
                    <Link
                      href={`/blogs/${item.slug}`}
                      className="transition hover:text-[var(--color-metallic-gold)]"
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
