import { PageHero } from "@/components/page-hero";
import { Footer, Header } from "@/components/site-shell";

export default function PayNowPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Pay Now"
          title="Upcoming payments and dues."
          body="A payment gateway integration area for reservation payments, installments, service dues, and future client payment journeys."
          backgroundImage="/isla/10.jpeg"
        />
        <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color-primary-navy)]">
                Payment gateway ready
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-charcoal)]">
                Connect this page to Stripe, Checkout.com, Telr, PayTabs, or a
                UAE banking payment gateway once merchant credentials are
                available. The current interface is prepared for booking
                reference lookup and payment collection.
              </p>
            </div>
            <form className="rounded-lg bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <input className="rounded-md border border-[var(--color-cool-gray)]/45 px-4 py-3" placeholder="Booking or unit reference" />
                <input className="rounded-md border border-[var(--color-cool-gray)]/45 px-4 py-3" placeholder="Customer email" />
                <select className="rounded-md border border-[var(--color-cool-gray)]/45 px-4 py-3 text-[var(--color-charcoal)]">
                  <option>Upcoming payment</option>
                  <option>Outstanding dues</option>
                  <option>Reservation payment</option>
                </select>
                <input className="rounded-md border border-[var(--color-cool-gray)]/45 px-4 py-3" placeholder="Amount" />
              </div>
              <button className="mt-5 w-full rounded-full bg-[var(--color-metallic-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]">
                Continue to Payment
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
