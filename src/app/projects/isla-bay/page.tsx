import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageIntro } from "@/components/site-shell";
import { islaBayHighlights } from "@/lib/site-content";

const islaGalleryImages = [
  "/isla/1.jpeg",
  "/isla/2.jpeg",
  "/isla/3.jpeg",
  "/isla/10.jpeg",
  "/isla/11.jpeg",
  "/isla/21.jpeg",
];

export default function IslaBayPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Our Projects"
          title="Isla Bay by Zaman Developers"
          body="Where the shoreline meets the skyline. Isla Bay is a fully curated waterfront residential landmark on Dubai Islands."
        />
        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[460px] overflow-hidden rounded-lg">
              <Image
                src="/isla/20.jpeg"
                alt="Isla Bay waterfront architecture"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="self-center">
              <h2 className="text-4xl font-semibold leading-tight text-[#16211f]">
                A permanent holiday destination engineered for absolute
                tranquility.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#44514d]">
                Every residence within Isla Bay is delivered fully curated,
                blending smart home automation with organic material finishes
                and floor-to-ceiling glass facades that frame uninterrupted
                views of the Arabian Gulf.
              </p>
              <div className="mt-8 grid gap-4">
                {islaBayHighlights.map((item) => (
                  <div key={item.title} className="border-l-2 border-[#d7b982] pl-5">
                    <h3 className="font-semibold text-[#16211f]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#56625e]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#16211f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#263733]"
              >
                Schedule a Private Briefing
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-[#f7f3ea] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#8e6f3d]">
                Curated Residences
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#16211f]">
                Organic finishes, quiet luxury, and fully furnished living.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {islaGalleryImages.map((src, index) => (
                <div
                  key={src}
                  className="relative min-h-72 overflow-hidden rounded-lg bg-[#dfd6c5]"
                >
                  <Image
                    src={src}
                    alt={`Isla Bay residence and amenity render ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
