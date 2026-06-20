import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "@/components/site-shell";

const projects = [
  {
    title: "Isla Bay",
    href: "/projects/isla-bay",
    image: "/isla/20.jpeg",
    location: "Dubai Islands",
    status: "Featured waterfront residence",
    description:
      "A fully curated beachfront residential landmark where the shoreline meets the skyline.",
  },
];

export default function OurProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our Projects"
          title="Waterfront landmarks shaped for Dubai's next era."
          body="Explore Zaman Developers' residential portfolio, beginning with Isla Bay on Dubai Islands."
          backgroundImage="/isla/20.jpeg"
        />
        <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="group overflow-hidden rounded-lg bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(17,43,69,0.14)]"
                >
                  <div className="relative min-h-[360px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} exterior render`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-metallic-gold)]">
                      <span>{project.location}</span>
                      <span className="h-1 w-1 rounded-full bg-[var(--color-soft-gold)]" />
                      <span>{project.status}</span>
                    </div>
                    <h2 className="mt-4 text-3xl font-semibold text-[var(--color-primary-navy)]">
                      {project.title}
                    </h2>
                    <p className="mt-4 max-w-xl leading-7 text-[var(--color-charcoal)]">
                      {project.description}
                    </p>
                    <span className="mt-6 inline-flex text-sm font-semibold text-[var(--color-metallic-gold)] transition group-hover:text-[var(--color-primary-navy)]">
                      View Project
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
