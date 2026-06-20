import { PageHero } from "@/components/page-hero";
import { Footer, Header } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Schedule a private briefing for Isla Bay."
          body="Connect with Zaman Developers for investor enquiries, broker registration, project briefings, and priority access to Isla Bay."
          backgroundImage="/isla/2.jpeg"
        />
        <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-lg bg-[var(--color-primary-navy)] p-8 text-[var(--color-white)]">
              <h2 className="text-2xl font-semibold">Zaman Developers</h2>
              <div className="mt-8 space-y-5 text-sm leading-7 text-white/72">
                <p>Dubai Islands, Dubai, United Arab Emirates</p>
                <p>sales@zamandevelopers.com</p>
                <p>+971 00 000 0000</p>
              </div>
            </div>
            <form className="rounded-lg bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-[var(--color-cool-gray)]/45 px-4 py-3" placeholder="Full name" />
                <input className="rounded-md border border-[var(--color-cool-gray)]/45 px-4 py-3" placeholder="Email address" />
                <input className="rounded-md border border-[var(--color-cool-gray)]/45 px-4 py-3" placeholder="Phone number" />
                <select className="rounded-md border border-[var(--color-cool-gray)]/45 px-4 py-3 text-[var(--color-charcoal)]">
                  <option>Private briefing</option>
                  <option>Investor enquiry</option>
                  <option>Broker partnership</option>
                  <option>Payment support</option>
                </select>
              </div>
              <textarea className="mt-4 min-h-36 w-full rounded-md border border-[var(--color-cool-gray)]/45 px-4 py-3" placeholder="Message" />
              <button className="mt-5 w-full rounded-full bg-[var(--color-metallic-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]">
                Submit Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
