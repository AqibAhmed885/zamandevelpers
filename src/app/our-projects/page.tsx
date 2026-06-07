import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageIntro } from "@/components/site-shell";

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
        <PageIntro
          eyebrow="Our Projects"
          title="Waterfront landmarks shaped for Dubai's next era."
          body="Explore Zaman Developers' residential portfolio, beginning with Isla Bay on Dubai Islands."
        />
        <section className="bg-[#f7f3ea] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="group overflow-hidden rounded-lg bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(16,24,22,0.14)]"
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
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8e6f3d]">
                      <span>{project.location}</span>
                      <span className="h-1 w-1 rounded-full bg-[#d7b982]" />
                      <span>{project.status}</span>
                    </div>
                    <h2 className="mt-4 text-3xl font-semibold text-[#16211f]">
                      {project.title}
                    </h2>
                    <p className="mt-4 max-w-xl leading-7 text-[#56625e]">
                      {project.description}
                    </p>
                    <span className="mt-6 inline-flex text-sm font-semibold text-[#8e6f3d] transition group-hover:text-[#16211f]">
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
