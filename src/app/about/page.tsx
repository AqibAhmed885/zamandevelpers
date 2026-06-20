import { PageHero } from "@/components/page-hero";
import { Footer, Header } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="A legacy of perfection, built for the future."
          body="Zaman Developers was born from a relentless ambition to transcend conventional design norms in the world's most dynamic metropolis."
          backgroundImage="/isla/24.jpeg"
        />
        <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6 text-lg leading-8 text-[var(--color-charcoal)]">
              <p>
                Real estate is more than the arrangement of stone and steel; it
                is the curation of human experiences. Zaman Developers was born
                out of a relentless ambition to transcend conventional design
                norms in the world&apos;s most dynamic metropolis.
              </p>
              <p>
                Every landmark project we design is an uncompromising commitment
                to structural integrity, functional art, and environmental
                harmony. We align our blueprints with the grand vision of
                Dubai&apos;s urban future, creating iconic spaces that offer sustained
                capital appreciation for global investors and an elevated
                lifestyle for residents.
              </p>
              <p>
                We do not build for the fleeting trends of today. We build
                structures that command admiration for generations.
              </p>
            </div>
            <div className="grid gap-5">
              <div className="rounded-lg bg-white p-7">
                <h2 className="text-2xl font-semibold text-[var(--color-primary-navy)]">
                  Our Vision
                </h2>
                <p className="mt-4 leading-7 text-[var(--color-charcoal)]">
                  To sculpt the architectural icons of tomorrow, transforming
                  the concept of luxury into timeless landmarks that define
                  urban eras and elevate the human experience.
                </p>
              </div>
              <div className="rounded-lg bg-white p-7">
                <h2 className="text-2xl font-semibold text-[var(--color-primary-navy)]">
                  Our Mission
                </h2>
                <p className="mt-4 leading-7 text-[var(--color-charcoal)]">
                  At Zaman Developers, we fuse visionary design with engineering
                  precision to curate elite residential ecosystems. We are
                  committed to delivering uncompromising structural integrity,
                  sustainable innovation, and hand-crafted luxury. By honoring
                  our timelines as absolute promises, we build trusted global
                  legacies—one masterpiece at a time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
