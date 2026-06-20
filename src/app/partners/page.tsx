import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PartnerOnboardingForm } from "@/components/partner-onboarding-form";
import { Footer, Header } from "@/components/site-shell";

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Partners"
          title="Partner with Dubai's next real estate force."
          body="Designed for global network partners, agencies, individual brokers, and investors ready to shape Dubai's next waterfront era."
          backgroundImage="/isla/21.jpeg"
        />
        <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="border-t-4 border-[var(--color-metallic-gold)] bg-[var(--color-white)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(17,43,69,0.12)] sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-metallic-gold)]">Investor Relations</p>
                <h2 className="text-2xl font-semibold text-[var(--color-primary-navy)]">
                  For Investors
                </h2>
                <p className="mt-4 leading-7 text-[var(--color-charcoal)]">
                  Unlock high-yielding real estate portfolios backed by the
                  premium waterfront location of Dubai Islands, featuring
                  highly attractive, investor-centric payment plans.
                </p>
              </article>
              <article className="border-t-4 border-[var(--color-metallic-gold)] bg-[var(--color-white)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(17,43,69,0.12)] sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-metallic-gold)]">The Zaman Circle</p>
                <h2 className="text-2xl font-semibold text-[var(--color-primary-navy)]">
                  For Registered Brokers
                </h2>
                <p className="mt-4 leading-7 text-[var(--color-charcoal)]">
                  Join the Zaman Circle. Gain exclusive first-look access to
                  private off-plan launches for Isla Bay, advanced 3D digital
                  marketing assets, and an unparalleled network of global support.
                </p>
              </article>
            </div>
            <Link href="#partner-onboarding" className="mt-9 inline-flex bg-[var(--color-metallic-gold)] px-7 py-3 text-sm font-semibold text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]">
              Register as an Official Partner
            </Link>
          </div>
        </section>
        <section className="bg-[var(--color-off-white)]">
          <PartnerOnboardingForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
