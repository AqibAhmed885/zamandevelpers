import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 lg:px-8 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[38%] opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(72deg, transparent 0, transparent 18px, #16211f 19px, #16211f 22px)",
        }}
      />
      <div className="relative mx-auto grid max-w-320 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-3xl">
          <div className="border-l-[3px] border-[#9f264a] pl-5">
            <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-[#111816] sm:text-4xl lg:text-3xl">
              A Legacy of Perfection, Built for the Future.
            </h2>
          </div>
          <div className="mt-8 space-y-5 pl-6 text-base leading-8 text-[#4f5b57] sm:text-base">
            <p>
              Real estate is more than the arrangement of stone and steel; it
              is the curation of human experiences. Zaman Developers was born
              out of a relentless ambition to transcend conventional design
              norms in the world&apos;s most dynamic metropolis.
            </p>
            <Link
              href="/about"
              className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[#9f264a] transition hover:text-[#16211f]"
            >
              Read Our Story
            </Link>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="relative rotate-4 min-h-100 overflow-hidden lg:min-h-140">
            <Image
              src="/isla/22.jpeg"
              alt="Isla Bay architectural facade"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative rotate-4 min-h-100 overflow-hidden lg:min-h-140">
            <Image
              src="/isla/5.jpeg"
              alt="Isla Bay curated interior detail"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
